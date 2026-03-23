const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
module.exports = {
  plugins: {
    tailwindcss: { config: './tailwind.config.cjs' },
    autoprefixer: {},
  },
};
export default config;
