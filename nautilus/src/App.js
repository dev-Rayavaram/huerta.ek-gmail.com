import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js'
import Header from './components/Header.js'
import Main from './components/main.js'
import Footer from './components/Footer.js'


function App() {
  return (
    <React.Fragment>
    <div className="App">
      <div className="page">
        <div className="row"> 
            <Navbar/>
        </div>
        <div className="row"> 
          <Header/>
        </div>
        <div className="row"> 
          <Main/>
        </div>
        <div className="row"> 
          <Footer/>
        </div>


      </div>
       </div>

    </React.Fragment>
  );
}

export default App;
