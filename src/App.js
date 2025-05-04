import React, { Component } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
 
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
 
class App extends Component {
  render() {
    return (      
       <Router>
        <div>
            <div class="main-nav">
              <ul class="nav">
                <li class="name">Jorge Rivera...</li>
                <Navigation />
              </ul>
            </div>

            <Routes>
             <Route path="my-intro-react/" element={<Home />} />
             <Route path="my-intro-react/about" element={<About />} />
             <Route path="my-intro-react/contact" element={<Contact />} />
             {/*<Route component={Error}/>*/}
           </Routes>
        </div> 
      </Router>
    );
  }
}
 
export default App;