// mui theme settings
export const themeSettings = (mode) => {
  const colorTokens = {
    black: "#000000",
    yellow50: "#FFFDE7",
    yellow100: "#FFF9C4",
    yellow200: "#FFF59D",
    yellow300: "#FFF176",
    yellow400: "#FFEE58",
    yellow500: "#FFEB3B",
    yellow600: "#FDD835",
    yellow700: "#FBC02D",
    yellow800: "#F9A825",
    yellow900: "#F57F17",
  };

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              dark: colorTokens.yellow400,
              main: colorTokens.yellow500,
              light: colorTokens.yellow600,
            },
            neutral: {
              dark: "#FFFFFF",
              main: "#F0F0F0",
              mediumMain: "#A3A3A3",
              medium: "#858585",
              light: "#333333",
            },
            background: {
              default: "#1A1A1A",
              alt: "#333333",
            },
          }
        : {
            // palette values for light mode
            primary: {
              dark: colorTokens.black,
              main: colorTokens.black,
              light: colorTokens.black,
            },
            neutral: {
              dark: "#333333",
              main: "#666666",
              mediumMain: "#A3A3A3",
              medium: "#CCCCCC",
              light: "#FFFFFF",
            },
            background: {
              default: colorTokens.yellow50,
              alt: colorTokens.yellow100,
              gradient: `linear-gradient(135deg, ${colorTokens.yellow50}, ${colorTokens.yellow100})`,
            },
          }),
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
