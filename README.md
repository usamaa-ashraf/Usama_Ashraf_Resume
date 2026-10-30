# Usama Ashraf — Portfolio

A premium, light-themed portfolio for Usama Ashraf, built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, and Lucide React.

## Features

- Responsive single-page layout with sticky navigation and active-section tracking
- Animated hero profile card with a morphing tech-stack icon badge
- Filterable skills matrix by competency category
- Career experience timeline with current-role indicator
- Searchable, category-filtered directory of 26 delivered projects
- Education, certifications, and languages
- Contact form with prefilled email handoff, plus a downloadable PDF resume
- Custom `UA` monogram favicon via the Next.js App Router icon convention

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command             | Description                  |
| ------------------- | ---------------------------- |
| `npm run dev`       | Start the development server |
| `npm run build`     | Create a production build    |
| `npm run start`     | Run the production build     |
| `npm run lint`      | Run ESLint                   |
| `npm run typecheck` | Run TypeScript checks        |

## Project structure

```
app/          Layout, page composition, global styles, favicon
components/   Navbar, Hero, About, Skills, Experience, Projects, Education, Contact, Footer
lib/data.ts   Profile, skills, experience, project, and education content
public/       Resume PDF
```

Content can be updated in `lib/data.ts`. Replace `public/resume.pdf` to update the downloadable resume.
