/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/components/**/*.vue', './src/views/**/*.vue'],
  plugins: [import('@tailwindcss/aspect-ratio'), import('@tailwindcss/forms'), import('@tailwindcss/postcss')]
};
