# Run3

Run3 is a Progressive Web App (PWA) for becoming a runner. The project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

![Run3 app screenshots](/.github/run3-screenshots.png)
:arrow_up: The set of images above are what the web app looks like when added to your home screen.

## Goals
- :book: Adhere _mostly_ to [Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript).
- :apple: Style the app to match native iOS apps.
- :art: Theme the app using random, monochromatic colors and make design decisions based around that.
- :nail_care: Explore CSS-in-JS (This project uses [styled components](https://www.styled-components.com)).
- :signal_strength: App works without internet access (after initial load).

## Notes
- iOS still has a ways to go to better support PWAs. You have to leave the app open or it will lose its state. Also, enabling text-to-speech causes your music to pause indefinitely. I've filed a bug report for this, but it's possible it won't be considered a bug.
- Android has none of the above problems, but `backdrop-filter` is behind a flag in Chrome. :cry:

## Get Started
1. `git clone https://github.com/michaeljdeeb/run3`
2. `cd run3 && npm install`
3. `npm start`

## Contributing
This was a personal project built because most of the options in the App Store hid their pricing via in-app purchases and I got app fatigue trying to find something that worked for me. If something could be done better or seems off, I'd prefer to discuss it in an [issue](https://github.com/michaeljdeeb/run3/issues) and correct it instead of approving a PR.
