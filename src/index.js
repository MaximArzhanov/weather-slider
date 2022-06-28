import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppContainer from './components/App/AppContainer';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from "react-router-dom";
import store from './store/store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <Provider store={store}>
  //       {/* <App store={store} dispatch={store.dispatch} /> */}
  //       <AppContainer  />
  //     </Provider>
  //   </BrowserRouter>
  // </React.StrictMode>

  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        {/* <App store={store} dispatch={store.dispatch} /> */}
        <AppContainer  />
      </Provider>
    </HashRouter>
  </React.StrictMode>

);
