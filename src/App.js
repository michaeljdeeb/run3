import React, { Component } from 'react';
import { Route, Switch, withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Acknowledgements from './acknowledgements';
import HomeContainer from './home-container';
import Icon from './icon';
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
  background: ${props => `linear-gradient(${props.background} 10%, ${props.accent} 70%)`};
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;
`;

const Header = styled.div`
  background-color: ${props => props.background};
  height: env(safe-area-inset-top);
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

const Info = styled.div`
  color: ${props => props.accent};
  display: flex;
  justify-content: flex-end;
  margin-top: ${props => props.safeArea ? '0.1rem' : '0.75rem'};
  visibility: ${props => props.hide ? 'hidden' : 'visible'};
`;

class App extends Component {
  componentWillMount() {
    const { dispatch, themeLocked } = this.props;
    if (!themeLocked) {
      dispatch(setColors(generateColors()));
    }
  }

  render() {
    const { accent, background, progress } = this.props;
    const { pathname } = this.props.location;
    return (
      <StyledApp>
        <Background background={background} accent={accent} />
        <Header background={background} />
        <Info
          hide={/week/.test(pathname)}
          safeArea={CSS.supports('padding-top: env(safe-area-inset-top)')}
        >
          <Link to="/acknowledgements">
            <Icon color={accent} icon="acknowledgements" size="2x" />
          </Link>
        </Info>
        <Navigation accent={accent} background={background} />
        <Switch>
          <Route
            component={HomeContainer}
            exact
            path="/"
          />
          <Route
            component={Acknowledgements}
            path="/acknowledgements"
          />
          <Route
            path="/schedule"
            render={() => (
              <Schedule progress={progress} />
            )}
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
    progress: state.progress,
    themeLocked: state.settings.themeLocked,
  }
);

export default withRouter(connect(mapStateToProps)(App));
