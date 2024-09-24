/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    corePlugins: {
        aspectRatio: false,
    },
    theme: {
        container: {
            center: true,
        },
        extend: {},
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
