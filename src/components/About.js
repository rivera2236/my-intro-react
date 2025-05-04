import React from 'react';
import './css/normalize.css'; 
import './css/styles.css';
 
const About = () => {
    return (
       <div>
	    <header class="header">
	      <p class="tag location">Touch the Cube!</p>
	      <div class="scene">
	      <div class="cube">
	      <div class="cube__face cube__face--front"></div>
	      <div class="cube__face cube__face--back"></div> 
	      <div class="cube__face cube__face--right"></div>
	      <div class="cube__face cube__face--left"></div> 
	      <div class="cube__face cube__face--top"></div> 
	      <div class="cube__face cube__face--bottom"></div>
	      </div>
	      </div>
	    </header>

	    <footer>
	      <ul>
	        <li><a href="https://www.linkedin.com/in/jorge-rivera-618595197" class="social linkedin">LinkedIn</a></li>
	        <li><a href="https://github.com/rivera2236" class="social github">Github</a></li>
	      </ul>
	      <p class="copyright">Copyright 2020, Jorge Rivera</p>
	    </footer>
       </div>
    );
}
 
export default About;
