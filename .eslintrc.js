module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': [1, { forbid: ['.array', '.object' ], checkContextTypes: true, checkChildContextTypes: true }],
  },
};
