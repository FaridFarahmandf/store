import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//add redux

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './components/redux/Reducer';

//add blogContextProvider
import BlogContextProvider from './components/context/BlogContext'

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <BlogContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </BlogContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
