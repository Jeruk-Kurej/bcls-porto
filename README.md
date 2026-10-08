# bcls-porto

Source for my portfolio website: [bryancarlie.vercel.app](https://bryancarlie.vercel.app).

It shows who I am, six projects with their case studies, my experience, and a downloadable CV.

## Stack

Next.js (App Router), React, TypeScript, and Tailwind CSS. Every page is statically generated and deployed on Vercel.

## Structure

| Path | What it holds |
|---|---|
| `src/data/` | The content: projects, experience, and contact details |
| `src/app/` | Pages: home, `/work`, `/work/[id]`, `/experience`, plus the icon and link-preview image |
| `src/components/sections/` | Sections of the home and experience pages |
| `src/components/ui/` | Shared pieces such as the header, project card, and section layout |
| `public/images/` | Project screenshots and the profile photo |
| `cv/cv.html` | Source of the CV; the PDF in `public/` is printed from it |

To add or edit a project, change `src/data/projects.ts`. The pages read everything from there.

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build
npm run lint
```
