import React from 'react';
import ReactDOM from 'react-dom';
import GifExpertApp from "./GifExpert/containers/GifExpertApp";
import './index.css';
import 'animate.css';

ReactDOM.render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
  document.getElementById('root')
);