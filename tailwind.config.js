const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        ["ping-once"]: "ping 1s ease-in-out 1",
        ["ping-short"]: "ping 1s ease-in-out 3",
        ["fade-out-sm"]: "fadeOut .2s ease-in-out",
        ["fade-out-md"]: "fadeOut .5s ease-in-out",
        ["fade-out-lg"]: "fadeOut 1s ease-in-out",
        ["fade-in-sm"]: "fadeIn .2s ease-in-out",
        ["fade-in-md"]: "fadeIn .5s ease-in-out",
        ["fade-in-lg"]: "fadeIn 1s ease-in-out",
        ["scale-sm"]: "scaleSm 1s ease-in-out",
        ["scale-md"]: "scaleMd 1s ease-in-out",
        ["scale-lg"]: "scaleLg 1s ease-in-out",
        ["breathing-sm"]: "breathingSm 6s ease-in-out infinite",
        ["breathing-md"]: "breathingMd 6s ease-in-out infinite",
        ["breathing-lg"]: "breathingLg 6s ease-in-out infinite",
        ["from-top-full"]: "fromTopFull 2.s ease-in-out",
        ["accent-sm"]: "pingSm 1s cubic-bezier(0, 0, 0.2, 1) 3",
        ["accent-md"]: "pingMd 1s cubic-bezier(0, 0, 0.2, 1) 3",
        ["accent-lg"]: "pingLg 1s cubic-bezier(0, 0, 0.2, 1) 3",
        ["ping-sm"]: "pingSm 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        ["ping-md"]: "pingMd 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        ["ping-lg"]: "pingLg 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: () => ({
        fadeOut: {
          "0%": { opacity: "100%" },
          "100%": { opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100%" },
        },
        scaleSm: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        scaleMd: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.3)" },
          "100%": { transform: "scale(1)" },
        },
        scaleLg: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.5)" },
          "100%": { transform: "scale(1)" },
        },
        fromTopFull: {
          "0%": { transform: "translateY(-100vh)" },
          "100%": { transform: "translateY(none)" },
        },
        breathingSm: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        breathingMd: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        breathingLg: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.3)" },
          "100%": { transform: "scale(1)" },
        },
        pingSm: {
          "75%": { transform: "scale(1.3)", opacity: "0" },
          "100%": { transform: "scale(1.3)", opacity: "0" },
        },
        pingMd: {
          "75%": { transform: "scale(1.7)", opacity: "0" },
          "100%": { transform: "scale(1.7)", opacity: "0" },
        },
        pingLg: {
          "75%": { transform: "scale(2)", opacity: "0" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
      }),
      transitionProperty: {
        height: "height",
        width: "width",
        spacing: "margin, padding",
      },
    },
    aspectRatio: {
      phone: "0.46 / 1",
      tablet: "0.75 / 1",
      desktop: "16 / 9",
    },
  },
  plugins: [],
};
