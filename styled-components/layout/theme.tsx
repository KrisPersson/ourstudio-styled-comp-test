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
    primaryDefault: "rgba(24, 24, 24, 1)",
    primaryLight: "rgba(255, 255, 255, 1)",
    secondaryDefault: "rgba(254, 238, 190, 1)",
  },
  font: {
    family: {
      main: "DM Sans, sans-serif",
    },
    lineHeight: {
      main: "1.5",
      alt: "1.1",
    },
    weight: {
      regular: "400",
      medium: "500",
      bold: "700",
    },
    size: {
      xsmall: "0.75rem",
      small: "0.875rem",
      regular: "1rem",
      large: "1.125rem",
      xlarge: "1.25rem",
      xxlarge: "2rem",
      xxxlarge: "2.125rem",
      xxxxlarge: "5.125rem",
    },
  },
  size: {
    baseUnit: "8px",
    containerMaxWidth: "1560px",
    contentMaxWidth: "560px",
  },
  spacing: {
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
    padding: {
      page: {
        top: {
          mobile: "28px",
          desktop: "40px",
        },
      },
    },
  },
};

export type Theme = typeof theme;

export default theme;
