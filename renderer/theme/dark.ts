const darkTheme = {
  titlebar: {
    height: "44px",
  },

  sidebar: {
    background: "#222B3A",
    width: "220px",
  },

  palette: {
    primary: {
      main: "#5aa4ff",
      light: "#7bb6ff",
      dark: "rgba(90,164,255,0.25)",
    },

    text: {
      primary: "#ffffff",
    },

    background: "#161f2d",
  },

  spacing: (size: number) => `${8 * size}px`,
  hexToRGB: (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    const rgbValue = `${r},${g},${b}`;

    if (alpha) {
      return `rgba(${rgbValue},${alpha})`;
    }

    return `rgb(${rgbValue})`;
  },
};

export default darkTheme;
