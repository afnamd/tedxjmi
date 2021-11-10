module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Cinzel: ["Cinzel", "serif"],
        Lora: ["Lora", "serif"],
      },
      width: {
        "200px": "200px",
      },
      height: {
        "200px": "200px",
      },
    },
  },
  variants: {
    extend: {
      divideColor: ["group-hover"],
    },
  },
  plugins: [],
};
