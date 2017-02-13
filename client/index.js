/**
 * Client entry point
 */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import { configureStore } from './store';
import $ from 'jquery';


// Initialize store
const store = configureStore(window.__INITIAL_STATE__);
const mountApp = document.getElementById('root');
$("body").append($('<script src="https://code.jquery.com/jquery-1.12.4.min.js">')); 
$("body").append($('<script src="https://service.iamport.kr/js/iamport.payment-1.1.4.js">')); 
$("body").append($('<link href="//cdn.muicss.com/mui-0.9.9-rc2/css/mui.min.css" rel="stylesheet" type="text/css" media="screen" />'));
render(
  <AppContainer>
    <App store={store} />
  </AppContainer>,
  mountApp
);

// For hot reloading of react components
if (module.hot) {
  module.hot.accept('./App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./App').default; // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextApp store={store} />
      </AppContainer>,
      mountApp
    );
  });
}