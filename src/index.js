// import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import {StrictMode} from 'react'
import './i18n/index';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
