import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Header from './components/header/Header';
import InroSlider from './components/introSlider/IntroSlider';
import AllPallete from './components/allPallete/AllPallete';
import CategoryNews from './components/categoryNews/CategoryNews';
import Footer from './components/footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    <Header/> 
    <InroSlider/>
    <AllPallete/>
    <CategoryNews/>
    <Footer/>
  </React.StrictMode>
);