import React from 'react';
import ReactDOM from 'react-dom';
import Analytics from 'react-router-ga';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';

import 'normalize.css';
import './index.css';
import App from './App';
import rootReducer from './redux/rootReducer';
import registerServiceWorker from './registerServiceWorker';
import { loadState, saveState } from './localStore';

const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  devToolsEnhancer(),
);

store.subscribe(() => {
  saveState({
    colors: store.getState().colors,
    progress: store.getState().progress,
    settings: store.getState().settings,
  });
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Analytics id="UA-49663508-4">
        <App />
      </Analytics>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
