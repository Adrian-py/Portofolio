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
        primary: "#FF9E67",
        background: "#1C1C21",
        text: "#BEBEBE",
        textHighlight: "#F4F5F5",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        desktopXl: "1920px",
        desktopLg: "1560px",
        desktopMed: "1440px",
        desktopS: "1366px",
        tabletHor: "1024px",
        tabletVert: "768px",
        mobileL: "414px",
        mobileS: "360px",
      },
    },
  },
  plugins: [],
};
export default config;
