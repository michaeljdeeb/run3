import randomColor from 'randomcolor';
import Color from 'color';

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

const nextAccessible = (accent, background, ratio) => {
  const currentRatio = Color(accent).contrast(Color(background));

  if (currentRatio >= ratio) {
    return Color(accent).rgb().array();
  }

  let ratioLighter = currentRatio;
  let i = 0;
  while (ratioLighter < ratio && i < 100) {
    let colorLighter = Color(accent).hsl();

    i += 0.1;
    colorLighter.color[2] += i;

    colorLighter = Color(colorLighter).hex();
    ratioLighter = Color(colorLighter).contrast(Color(background));

    if (ratioLighter >= ratio) {
      return Color(colorLighter).rgb().array();
    }
  }
  return Color(accent).rgb().array();
};

export default () => {
  const backgroundArray = randomColor({ luminosity: 'dark', format: 'rgbArray' });
  const background = `rgb(${backgroundArray[0]}, ${backgroundArray[1]}, ${backgroundArray[2]})`;
  const backgroundAlpha = `rgba(${backgroundArray[0]}, ${backgroundArray[1]}, ${backgroundArray[2]}, 0.15)`;

  const dangerousAccent = randomColor({ hue: rgbToHex(backgroundArray), luminosity: 'bright' });
  const accentArray = nextAccessible(dangerousAccent, background, 3);
  const accent = `rgb(${accentArray[0]}, ${accentArray[1]}, ${accentArray[2]})`;
  const accentAlpha = `rgba(${accentArray[0]}, ${accentArray[1]}, ${accentArray[2]}, 0.15)`;

  return {
    accent,
    accentAlpha,
    background,
    backgroundAlpha,
  };
};
