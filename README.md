# Flowbyte Solutions

**Flowbyte Solutions** is a modern web application built with React, TypeScript, Vite, and Tailwind CSS. The project is structured for scalability and maintainability with clearly defined components and pages.

---

## Project Structure

```
src/
├── components/          # Reusable components like Navbar and Footer
│   ├── Footer.tsx
│   └── Navbar.tsx
├── pages/               # Route-based pages for different sections
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   ├── FaqPage.tsx
│   ├── GetStartedPage.tsx
│   ├── NotFoundPage.tsx
│   └── ServicesPage.tsx
├── App.tsx              # Root application component
├── declarations.d.ts    # (optional) module declarations
├── main.tsx             # Entry point
├── routes.tsx           # Route definitions
```

---

## Technologies Used

- **React 18+**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **EmailJS** (for contact forms)
- **React Router DOM** (for routing)

---

## Pages Overview

- `/about` – Company background.
- `/services` – Overview of offered services (with accordion).
- `/faq` – Frequently asked questions.
- `/contact` – Contact form.
- `/get-started` – Lead generation form integrated with EmailJS.
- `404` – Not found page.

---

## Scripts

```bash
git clone https://www.github.com/pratyoos/flowbyte-solutions.git
cd flowbyte-solutions
npm install     # Install dependencies
npm run dev     # Run the development server
npm run build   # Build for production
```

---

## TypeScript Config Highlights

- `"strict": true` – Enforces strict typing
- `"moduleResolution": "bundler"` – For modern bundlers like Vite
- `"jsx": "react-jsx"` – For the new JSX transform
- `"noUncheckedSideEffectImports": true` – Clean and safe code

---

## Declarations

You do not need `declarations.d.ts` unless importing untyped JS libraries. All your `.tsx` components are correctly typed by default.

---

## Linting

Ensure ESLint is configured (`eslint.config.js`) to enforce best practices, such as:

- No unused variables
- Consistent component structure
- Dark mode-friendly styles (already applied)

---

## Location Embed

Google Maps iframe is embedded in the footer for contact location preview.

---

## Author

Made with ❤️ by [Pratyoos](https://github.com/pratyoos).

