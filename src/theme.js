const deviceSizes = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1024px",
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  nonLaptop: `screen and (min-width: ${deviceSizes.laptop})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};

const theme = {
  device,
};

export default theme;
