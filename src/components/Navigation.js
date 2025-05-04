import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/normalize.css'; 
import './css/styles.css'; 
 
const Navigation = () => {
    return (
      <div>
	   	<ul class="nav">
	      <li><NavLink to="my-intro-react/">Home</NavLink></li>
	      <li><NavLink to="my-intro-react/about">Cube</NavLink></li>
	      <li><NavLink to="my-intro-react/contact">Photos</NavLink></li>
	      <li><a href="https://www.linkedin.com/in/jorge-rivera-618595197">LinkedIn</a></li>
        <li><a href="https://github.com/rivera2236">GitHub</a></li>
	    </ul>
      </div>
    );
}
 
export default Navigation;