# Faheem's Portfolio

A premium, minimalistic portfolio website built with Next.js 16, Tailwind CSS v4, and Framer Motion.

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── globals.css     # Global styles & Tailwind config
│   ├── layout.tsx      # Root layout with fonts
│   └── page.tsx        # Main page composing all sections
├── components/
│   ├── sections/
│   │   ├── Hero.tsx        # Full-screen hero with profile
│   │   ├── About.tsx       # Editorial about section
│   │   ├── Experience.tsx  # Timeline experience section
│   │   ├── Projects.tsx    # Project grid showcase
│   │   ├── Skills.tsx      # Categorized skills tags
│   │   └── Contact.tsx     # Contact CTA section
│   └── ui/
│       ├── Button.tsx          # Reusable button component
│       ├── Navigation.tsx      # Sticky navigation
│       ├── SectionHeading.tsx  # Section title component
│       └── Footer.tsx          # Site footer
└── lib/                    # Utility functions (if needed)
```

## Customization

### Images
Add your images to the `public/images/` directory:
- `profile.jpg` - Your profile photo
- `about.jpg` - About section image
- `projects/` - Project screenshots

### Content
Update the data in each section component:
- `Hero.tsx` - Headline, tagline, social links
- `About.tsx` - Bio, stats, highlights
- `Experience.tsx` - Work/education history
- `Projects.tsx` - Portfolio projects
- `Skills.tsx` - Technical skills
- `Contact.tsx` - Contact info, social links

### Colors
The design uses a refined neutral palette defined in `globals.css`:
- Background: `#FAFAFA`
- Foreground: `#0A0A0A`
- Gray scale: 50-950 for typography hierarchy

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Fonts**: Inter (body) + Playfair Display (headings)
- **Language**: TypeScript

## Deploy

Deploy easily on [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
