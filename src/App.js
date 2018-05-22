import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
import { setLastViewed } from './redux/lastViewed';
import supportsBackdrop from './utils/supportsBackdrop';

import { Button } from './styles/buttons';
import { FlexContainer, FlexColumnContainer } from './styles/containers';

const StyledApp = FlexColumnContainer.extend`
  color: #fff;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
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
  background-color: ${props => (props.blur ? props.backgroundAlpha : props.background)};
  backdrop-filter: ${props => (props.blur ? 'blur(20px)' : 'none')};
  height: env(safe-area-inset-top);
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

const Info = FlexContainer.extend`
  color: ${props => props.accent};
  justify-content: flex-end;
  margin-top: 0.75rem;
  visibility: ${props => (props.hide ? 'hidden' : 'visible')};
`;

const Padding = styled.div`
  height: 2rem;
  width: 100%;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.infoClicked = this.infoClicked.bind(this);
  }

  componentWillMount() {
    const { dispatch, themeLocked } = this.props;
    if (!themeLocked) {
      dispatch(setColors(generateColors()));
    }
  }

  infoClicked() {
    const { dispatch, history } = this.props;
    const { pathname } = this.props.location;

    dispatch(setLastViewed(pathname));
    history.push('/acknowledgements');
  }

  render() {
    const {
      accent,
      accentAlpha,
      background,
      dispatch,
      lastViewed,
      progress,
    } = this.props;
    const { pathname } = this.props.location;

    const renderInfo = /acknowledgements/.test(pathname) ? (
      <Link to={lastViewed}>
        <Icon color={accent} icon="close" size="2x" />
      </Link>
    ) : (
      <Button onClick={this.infoClicked}>
        <Icon color={accent} icon="acknowledgements" size="2x" />
      </Button>
    );

    return (
      <StyledApp>
        <Background background={background} accent={accent} />
        <Header background={background} blur={supportsBackdrop()} />
        <Info
          hide={/week/.test(pathname)}
        >
          { renderInfo }
        </Info>
        <Navigation accent={accent} accentAlpha={accentAlpha} background={background} />
        <Switch>
          <Route
            component={HomeContainer}
            exact
            path="/"
          />
          <Route
            path="/acknowledgements"
            render={() => (
              <Acknowledgements dispatch={dispatch} />
            )}
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
        <Padding />
      </StyledApp>
    );
  }
}

App.defaultProps = {
  lastViewed: '/',
  themeLocked: false,
};

App.propTypes = {
  accent: PropTypes.string.isRequired,
  accentAlpha: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  lastViewed: PropTypes.string,
  location: PropTypes.object.isRequired,
  progress: PropTypes.object.isRequired,
  themeLocked: PropTypes.bool,
};

const mapStateToProps = state => (
  {
    accent: state.colors.accent,
    accentAlpha: state.colors.accentAlpha,
    background: state.colors.background,
    backgroundAlpha: state.colors.backgroundAlpha,
    lastViewed: state.lastViewed,
    progress: state.progress,
    themeLocked: state.settings.themeLocked,
  }
);

export default withRouter(connect(mapStateToProps)(App));
