import randomColor from 'randomcolor';
// import A11yColor from 'a11ycolor';

const rgbToHex = (rgbArray) => {
  let hex = '#';
  for (let i = 0; i < rgbArray.length; i += 1) {
    let colorString = rgbArray[i].toString(16);
    if (colorString.length < 2) {
      colorString = `0${colorString}`;
    }
    hex += colorString;
  }

  return hex;
};

export default () => {
  const backgroundArray = randomColor({ luminosity: 'dark', format: 'rgbArray' });
  const background = `rgb(${backgroundArray[0]}, ${backgroundArray[1]}, ${backgroundArray[2]})`;
  const backgroundAlpha = `rgba(${backgroundArray[0]}, ${backgroundArray[1]}, ${backgroundArray[2]}, 0.15)`;

  // const dangerousAccent = randomColor({ hue: background, luminosity: 'bright' });
  // const accent = A11yColor(dangerousAccent, background, 'large', 0.1);
  const accentArray = randomColor({ hue: rgbToHex(backgroundArray), luminosity: 'bright', format: 'rgbArray' });
  const accent = `rgb(${accentArray[0]}, ${accentArray[1]}, ${accentArray[2]})`;
  const accentAlpha = `rgba(${accentArray[0]}, ${accentArray[1]}, ${accentArray[2]}, 0.15)`;

  return {
    accent,
    accentAlpha,
    background,
    backgroundAlpha,
  };
};
