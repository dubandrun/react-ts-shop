import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { AppContainer } from './components/App/AppContainer';
import store from './store/store'

import './index.css';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
