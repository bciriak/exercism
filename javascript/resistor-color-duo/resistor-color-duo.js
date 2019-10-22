//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const value = (colorArray) => {
  let resistorValue = '';

  for (let i = 0; i < 2; i ++) {
    resistorValue += COLORS.indexOf(colorArray[i].toLowerCase()).toString();
  }

  return Number(resistorValue);
};

const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
];
