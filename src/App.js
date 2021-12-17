import logo from './logo.svg';
import './App.css';
import NavigationOne from './Components/Navigations/NavigationOne';

import {BrowserRouter, Switch } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import NavigationTwo from './Components/Navigations/NavigationTwo';
import NavigationThree from './Components/Navigations/NavigationThree';
import NavigationFour from './Components/Navigations/NavigationFour';
import NavigationFive from './Components/Navigations/NavigationFive';
import NavigationSix from './Components/Navigations/NavigationSix';
import NavigationSeven from './Components/Navigations/NavigationSeven';


function App() {


  return (
    <div className='App' >
     <BrowserRouter>
    <NavigationOne ></NavigationOne>
    <NavigationTwo></NavigationTwo>
    <NavigationThree></NavigationThree>
    <NavigationFour></NavigationFour>
    <NavigationFive></NavigationFive>
    <NavigationSix></NavigationSix>
    <NavigationSeven></NavigationSeven>
     </BrowserRouter>
    </div>
  );
}

export default App;
