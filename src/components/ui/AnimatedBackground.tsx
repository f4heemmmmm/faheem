"use client";

import { useEffect, useRef } from "react";

const vertexShader = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  uniform vec2 resolution;
  uniform float time;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    for(int i = 0; i < 5; i++) {
      value += amplitude * noise(p * frequency);
      frequency *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec2 p = (uv - 0.5) * 2.0;
    p.x *= resolution.x / resolution.y;

    float wave1 = sin(p.x * 2.0 + time * 0.5) * 0.3;
    float wave2 = sin(p.x * 1.5 - p.y * 0.8 + time * 0.4) * 0.2;
    float wave3 = sin(p.x * 3.0 + p.y * 1.5 + time * 0.6) * 0.15;
    float waves = wave1 + wave2 + wave3;
    waves += fbm(p * 2.0 + vec2(time * 0.1, 0.0)) * 0.2;

    float h = waves * 0.5 + 0.5;

    // Blue palette
    vec3 color1 = vec3(0.18, 0.35, 0.65);   // medium blue
    vec3 color2 = vec3(0.30, 0.52, 0.82);   // bright blue
    vec3 color3 = vec3(0.50, 0.70, 0.92);   // light blue
    vec3 color4 = vec3(0.68, 0.82, 0.96);   // pale sky blue

    vec3 color;
    if (h < 0.33) {
      color = mix(color1, color2, h * 3.0);
    } else if (h < 0.66) {
      color = mix(color2, color3, (h - 0.33) * 3.0);
    } else {
      color = mix(color3, color4, (h - 0.66) * 3.0);
    }

    // Shimmer
    float shimmer = fbm(p * 6.0 + vec2(time * 0.3, time * 0.2));
    shimmer = pow(shimmer, 2.0) * 0.3;
    color += vec3(shimmer);

    // Depth gradient - lighter toward top
    color = mix(color, color1 * 0.8, (1.0 - uv.y) * 0.4);

    // Vignette
    float dist = length(uv - 0.5);
    color *= 1.0 - dist * 0.3;

    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    if (!gl) return;

    // Compile shaders
    function createShader(type: number, source: string) {
      const shader = gl!.createShader(type);
      if (!shader) return null;
      gl!.shaderSource(shader, source);
      gl!.compileShader(shader);
      if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) {
        console.error(gl!.getShaderInfoLog(shader));
        gl!.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = createShader(gl.VERTEX_SHADER, vertexShader);
    const fs = createShader(gl.FRAGMENT_SHADER, fragmentShader);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Fullscreen quad
    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    const timeLoc = gl.getUniformLocation(program, "time");
    const resolutionLoc = gl.getUniformLocation(program, "resolution");

    let animationId: number;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      gl!.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const startTime = Date.now();

    const render = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      gl!.uniform1f(timeLoc, elapsed);
      gl!.uniform2f(resolutionLoc, canvas.width, canvas.height);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      gl!.deleteProgram(program);
      gl!.deleteShader(vs);
      gl!.deleteShader(fs);
      gl!.deleteBuffer(buffer);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" aria-hidden="true" />
    </div>
  );
}
