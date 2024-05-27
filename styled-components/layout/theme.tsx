export const theme = {
  breakpoint: {
    Sm: "@media (min-width: 600px)",
    LtSm: "@media (max-width: 599px)",
    Md: "@media (min-width: 900px)",
    LtMd: "@media (max-width: 899px)",
    Lg: "@media (min-width: 1200px)",
    LtLg: "@media (max-width: 1199px)",
  },
  colors: {
    primaryDark: "rgba(0, 0, 0, 1)",
    primaryDefault: "rgba(20, 20, 20, 1)",
    primaryLight: "rgba(255, 255, 255, 1)",
    secondaryDefault: "rgba(254, 238, 190, 1)",
  },
  darkMode: {
    primaryDark: "rgba(0, 0, 0, 1)",
    primaryDefault: "rgba(255, 255, 255, 1)",
    primaryLight: "rgba(20, 20, 20, 1)",
    secondaryDefault: "rgba(254, 238, 190, 1)",
  },
  font: {
    family: {
      main: "DM Sans, sans-serif",
    },
    weight: {
      regular: 400,
    },
    lineHeight: {
      main: 1.43,
      alt: 1.68,
      tertiary: 1.2,
    },
    size: {
      small: "1.0625rem",
      regular: "1.1875rem",
      large: "1.75rem",
    },
  },
  size: {
    baseUnit: "8px",
    containerMaxWidth: "1560px",
  },
  padding: {
    page: {
      top: {
        mobile: "28px",
        desktop: "40px",
      },
    },
  },
  gutter: {
    container: {
      inline: {
        mobile: "32px",
        desktop: "40px",
      },
      block: {
        mobile: "28px",
        desktop: "40px",
      },
    },
  },
};

export type Theme = typeof theme;

export default theme;
