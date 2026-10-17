# Nirjal Byanjankar — Portfolio

A personal portfolio website showcasing my projects, skills, experience, certifications, and GitHub contributions, with an about page and a contact form.

[Visit the website](https://www.nirjalbyanjankar.com.np/)

## Built with

- **React and TypeScript** for the interface and application logic.
- **Vite** for local development and production builds.
- **Tailwind CSS** with the Vite plugin for styling and responsive layouts.
- **GSAP** for animations.
- **Lucide React** for icons.
- **Formspree** for contact form submissions.
- **ESLint** for code linting.

Component styling uses Tailwind utilities. `client/src/index.css` defines the shared theme colors, element states, responsive overrides, and custom animation keyframes. Tailwind's Preflight reset is omitted to preserve the existing browser defaults and appearance.

## Run locally

```sh
cd client
npm install
npm run dev
```

Run `npm run build` from `client` to create a production build, then `npm run preview` to preview it locally.

## Contact form setup

The contact form submits the visitor's name and message to Formspree using an AJAX POST. The recipient is configured in Formspree rather than supplied by the browser.

The configured endpoint is `https://formspree.io/f/mljgzvve`. It is included in the source so local and hosted builds work without additional environment configuration.

1. In [Formspree](https://formspree.io/), verify `nirjalbyanjankar@gmail.com` as the form's notification recipient.
2. To use a different form, optionally copy `client/.env.example` to `client/.env.local` and change `VITE_FORMSPREE_ENDPOINT`. For hosted builds, set the override in the build environment. Rebuild and redeploy after changing it.
3. Submit a message from the website and verify that it appears in Formspree and reaches the recipient.

Successful submissions clear the form and show a confirmation. Failed submissions keep the entered message and offer a direct-email link that opens the visitor's email app with the name and message filled in. The visitor still needs to send that email.

See [Formspree's AJAX documentation](https://help.formspree.io/articles/building-your-form/submit-forms-with-javascript-ajax).
