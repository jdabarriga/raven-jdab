import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { init, events, app } from "@neutralinojs/lib"
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename=''>
      <App/>
    </Router>
  </React.StrictMode>
);

init();
events.on("windowClose", () => {
  app.killProcess();
});