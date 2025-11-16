# GEMINI.md

## Project Overview

This is a static landing page for a mobile application called "Crowned". The project is built with [Next.js](https://nextjs.org/), a React framework, and styled with [Tailwind CSS](https://tailwindcss.com/). It uses TypeScript for type safety.

The main page is composed of several sections: `WelcomeHero`, `MysteryReveal`, `CrownShowcase`, `HowItWorks`, and `AppDownload`. The purpose of the page is to introduce the Crowned app and encourage users to download it.

## Building and Running

To get the project running locally, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the development server on `http://localhost:3005`.

3.  **Build for production:**
    ```bash
    npm run build
    ```
    This will create a production-ready build in the `.next` directory.

4.  **Start the production server:**
    ```bash
    npm run start
    ```
    This will start a production server.

5.  **Lint the code:**
    ```bash
    npm run lint
    ```
    This will run the linter to check for code quality.

## Development Conventions

*   **Styling:** The project uses Tailwind CSS for styling. Customizations are defined in `tailwind.config.ts`.
*   **Components:** Reusable components are located in the `src/components` directory.
*   **Sections:** The main page is divided into sections, which are located in the `src/sections` directory.
*   **Types:** TypeScript types are defined in the `src/types` directory.
*   **Hooks:** Custom hooks are located in the `src/hooks` directory.
*   **Constants:** Application constants, such as URLs, are stored in `src/constants`.
