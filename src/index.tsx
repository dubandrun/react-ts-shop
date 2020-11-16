import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/AppContainer/AppContainer';
import { Provider } from 'react-redux';
import store from './store'
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

