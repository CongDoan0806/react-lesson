import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProductPage from './components/webbanhang/content';
import Header from './components/webbanhang/header';
import Footer from './components/webbanhang/footer';
import CameraShop from './components/camerashop/home';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CameraShop />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
