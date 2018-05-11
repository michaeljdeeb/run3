import randomColor from 'randomcolor';
// import A11yColor from 'a11ycolor';

export default () => {
  const background = randomColor({ luminosity: 'dark' });
  // const dangerousAccent = randomColor({ hue: background, luminosity: 'bright' });
  // const accent = A11yColor(dangerousAccent, background, 'large', 0.1);
  const accent = randomColor({ hue: background, luminosity: 'bright' });

  return {
    accent,
    background,
  };
};
