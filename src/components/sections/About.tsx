export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="flex min-h-screen snap-start items-center section-spacing"
    >
      <div className="container-luxury">
        <div className="mb-12 md:mb-16">
          <p className="mb-4 text-caption tracking-widest text-foreground-subtle">
            about
          </p>
          <h2
            id="about-heading"
            className="font-display text-display-sm font-medium tracking-tight text-foreground md:text-display-md"
          >
            a brief introduction
          </h2>
        </div>
        <div className="mb-16 max-w-4xl">
          <p className="text-body-xl leading-relaxed text-foreground-muted md:text-display-sm md:font-light">
            i am <span className="font-semibold">faheem kamel</span>, a year 3{" "}
            <span className="font-semibold">computer science</span> undergraduate
            at singapore management university, majoring in{" "}
            <span className="font-semibold">cybersecurity</span>.
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
          <div>
            <h3 className="mb-4 text-body-lg font-medium tracking-wider text-foreground">
              my journey
            </h3>
            <p className="text-body-lg text-foreground-muted">
              my coding journey started in junior college with a-level computing.
              after 1.5 years of struggling, i changed my approach. i dedicated 3
              hours daily to rebuilding concepts my way. by a-levels, i achieved a
              five-grade improvement that shaped my confidence.
            </p>
          </div>
          <div className="md:pt-32">
            <h3 className="mb-4 text-body-lg font-medium tracking-wider text-foreground">
              passion for mathematics
            </h3>
            <p className="text-body-lg text-foreground-muted">
              i see mathematics as a universal language explaining how the world
              works. this passion for connecting ideas across fields shapes my
              approach to building logical, elegant software solutions.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-body-lg font-medium tracking-wider text-foreground">
              sports & athletics
            </h3>
            <p className="text-body-lg text-foreground-muted">
              sports have shaped me since age 7 through soccer, teaching teamwork,
              perseverance, and leadership. now i represent my university in
              floorball and play for woodlands csc skyhawks.
            </p>
          </div>
          <div className="md:pt-32">
            <h3 className="mb-4 text-body-lg font-medium tracking-wider text-foreground">
              travel & photography
            </h3>
            <p className="text-body-lg text-foreground-muted">
              traveling broadens my perspective and understanding of different
              cultures. i make it a point to capture these moments through
              photography. it really is a creative outlet that complements my
              technical work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
