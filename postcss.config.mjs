// This is the NEW, correct content for Tailwind CSS v4
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // Use the correct plugin package
    autoprefixer: {},
  },
};

export default config;