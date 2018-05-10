import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import randomColor from 'randomcolor';
import styled from 'styled-components';

import Disclaimer from './disclaimer';
import Navigation from './navigation';
import Schedule from './schedule';
import Settings from './settings';
import TimerContainer from './timer-container';

const StyledApp = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 0.75rem 4rem;
  padding-bottom: calc(4rem + env(safe-area-inset-bottom));
  padding-left: calc(0.75rem + env(safe-area-inset-left));
  padding-right: calc(0.75rem + env(safe-area-inset-right));
  padding-top: env(safe-area-inset-top);
`;

const Header = styled.div`
  height: env(safe-area-inset-top);
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accent: '',
      background: '',
      light: '',
    };
  }
  componentWillMount() {
    const background = randomColor({ luminosity: 'dark' });
    const light = randomColor({ hue: background, luminosity: 'light' });
    // let accentSet = randomColor({ hue: background, luminosity: 'bright', count: 100 });

    const accent = randomColor({ hue: background, luminosity: 'bright' });
/**
  *     do {
  *       accent = accentSet.pop();
  * 
  *       if (!accent) {
  *         accentSet = randomColor({ hue: background, luminosity: 'bright', count: 100 });
  *         accent = accentSet.pop();
  *       }
  *     } while (hex(background, accent) < 1);
  */

    this.setState({
      accent,
      background,
      light,
    });
  }

  render() {
    const { accent, background, light } = this.state;
    return (
      <StyledApp style={{ backgroundColor: background }}>
        <Header style={{ backgroundColor: background }}/>
        <Navigation accent={accent} background={background} light={light} />
        <Switch>
          <Route
            component={Disclaimer}
            exact
            path="/"
          />
          <Route
            component={Schedule}
            path="/schedule"
          />
          <Route
            component={TimerContainer}
            path="/week/:week/workout/:workout"
          />
          <Route
            component={Settings}
            path="/settings"
          />
        </Switch>
      </StyledApp>
    );
  }
}

export default App;
