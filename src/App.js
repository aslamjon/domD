import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './main.scss';

import Navbar from './components/navbar/nav';
import Header from './components/header/header';
import ChooseHome from './components/chooseHome/chooseHome';
import StartedToday from './components/letsGetStartToday/startedToday.component';
import PromiseFromCom from './components/promiseFromComp/promiseFromCom.component';
import ViewHome from './components/viewHome/viewHome';
import AboutWithNum from './components/aboutWithNum/aboutWithNum';
import Carousel from './components/calousel/carousel';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

import './App.css';


// const c = <a className="upArrow" id="upArrow" onClick={document.getElementById('upArrow').addEventListener('click', function () {console.log(window.scrollY)})}></a>
// ReactDOM.render(c, document.getElementById('root'));
function App() {

  return (
    <div className="App">
      <a href="/" className="upArrow" id="upArrow"></a>
      <Navbar/>
      <Header/>
      <ChooseHome/>
      <StartedToday/>
      <PromiseFromCom/>
      <ViewHome/>
      <AboutWithNum/>
      <Carousel/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
