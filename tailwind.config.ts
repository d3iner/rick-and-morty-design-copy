import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // default: ColorScale,
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        alive: "var(--alive-color)",
/*         success: ColorScale;
        warning: ColorScale;
        danger: ColorScale;
 */
        unknown: "var(--unknown-color)",
        dead: "var(--dead-color)",
      },
    },
  },
  plugins: [],
};
export default config;
