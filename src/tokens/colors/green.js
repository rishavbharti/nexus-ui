const shades = {
  10: '#CCEFE7',
  20: '#AAE5D7',
  30: '#80D7C3',
  40: '#56CAB0',
  50: '#2BBD9C',
  60: '#01B088', // rgba(1, 176, 136, 1)
  70: '#01755B',
};

const green = {
  ...shades,
  main: shades[60],
  light: shades[20],
  dark: shades[50],
};

export default green;