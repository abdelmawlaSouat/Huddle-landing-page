/*
 * App.js
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/11/19 10:55:45
 *
 * Copyright (c) 2020 Shuriken
 */

import './App.css';

import Navbar from './components/Navbar'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </div>
  )
}

export default App;
