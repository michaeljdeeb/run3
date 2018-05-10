import randomColor from 'randomcolor';

export default () => {
  const background = randomColor({ luminosity: 'dark' });
  const accent = randomColor({ hue: background, luminosity: 'bright' });

  return {
    accent,
    background,
  };
};
