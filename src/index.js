import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StateProvider } from "./StateProvider"
import {StripeProvider} from 'react-stripe-elements';
import reducer ,{ initialState } from './reducer';

ReactDOM.render(
    <StateProvider initialState = {initialState} reducer={reducer}>
      <StripeProvider apiKey="pk_test_12345">
        <App/>
      </StripeProvider>
    </StateProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();