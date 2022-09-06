import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from "@reduxjs/toolkit"
import { Provider } from 'react-redux';
import userReducer from "./features/user"
import themeReducer from "./features/theme"
import counterReducer from './features/counter';
import loginReducer from './features/login';
// store contains reducers
//reducer is a function that takes in information about the current state, previous value, action and new state 
const store = configureStore({
  reducer: {
    user: userReducer, 
    theme: themeReducer,
    counter: counterReducer,
    login: loginReducer,
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
