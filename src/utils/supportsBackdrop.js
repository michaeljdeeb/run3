const supportsBackdrop = () => (
  CSS.supports('backdrop-filter: blur(20px)') || CSS.supports('-webkit-backdrop-filter: blur(20px)')
);

export default supportsBackdrop;
