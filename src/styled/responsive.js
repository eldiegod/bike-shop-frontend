export const breakpoints = {
  large: 1030,
  medium: 850,
  phone: 450,
};

export const smallerThan = width => `@media screen and (max-width: ${width}px)`;
export const smallerThanHeight = height => `@media screen and (max-height: ${height}px)`;
export const widerThan = width => `@media screen and (min-width: ${width}px)`;

export const isHorizontal = smallerThan(769);

// Iterate through the breakpoints and create a media template
export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
