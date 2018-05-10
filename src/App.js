import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import HomeContainer from './home-container';
import Navigation from './navigation';
import Schedule from './schedule';
import Settings from './settings';
import TimerContainer from './timer-container';

import generateColors from './utils/generateColors';
import { setColors } from './redux/colors';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 0.75rem 4rem;
  padding-bottom: calc(4rem + env(safe-area-inset-bottom));
  padding-left: calc(0.75rem + env(safe-area-inset-left));
  padding-right: calc(0.75rem + env(safe-area-inset-right));
  padding-top: env(safe-area-inset-top);
`;

const Background = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;
`;

const Header = styled.div`
  height: env(safe-area-inset-top);
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

class App extends Component {
  componentWillMount() {
    const { dispatch, themeLocked } = this.props;
    if (!themeLocked) {
      dispatch(setColors(generateColors()));
    }
  }

  render() {
    const { accent, background } = this.props;
    return (
      <StyledApp>
        <Background style={{ backgroundColor: background }} />
        <Header style={{ backgroundColor: background }} />
        <Navigation accent={accent} background={background} />
        <Switch>
          <Route
            component={HomeContainer}
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

const mapStateToProps = state => (
  {
    accent: state.colors.accent,
    background: state.colors.background,
    themeLocked: state.settings.themeLocked,
  }
);

export default withRouter(connect(mapStateToProps)(App));
