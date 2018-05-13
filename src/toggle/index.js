import React from 'react';
import ReactToggle, { ThemeProvider } from 'react-toggle-styled-component';


const theme = props => (
  {
    checkedBg: props.accent,
    checkedBgHover: props.accent,
    notCheckedBg: '#4D4D4D',
    notCheckedBgHover: '#000000',
    checkedBorder: props.background,
    notCheckedBorder: props.accent,
    thumbBg: '#FAFAFA',
  }
);

const Toggle = props => (
  <ThemeProvider theme={theme({ accent: props.accent, backgroiund: props.background })}>
    <ReactToggle
      {...props}
    />
  </ThemeProvider>
);

export default Toggle;
