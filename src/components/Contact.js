import React from 'react';
import './css/normalize.css'; 
import './css/styles.css';
 
const Contact = () => {
    return (
       <div>
			<header class="photo-header">
						<p class="tag location">Interact for Color!</p>
				<main class="flex">
					<div class="wrapper">	
						<div class="item">
						    <div class="polaroid">
						    	<img alt="img here" src={require('./images/jorge.jpg')} />
					    	<div class="caption">Me</div>
						</div>
					</div>

					<div class="item">
						<div class="polaroid">
							<img alt="img here" src={require('./images/pendo.jpg')} />
					    <div class="caption">at meet-ups</div>
					 </div>

					 </div>
					 	<div class="item">
					    	<div class="polaroid">
						    	<img alt="img here" src={require('./images/redhat.jpg')} />
					      	<div class="caption">in Raleigh</div>
					    </div>
					  </div>
					</div>
				</main>
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
 
export default Contact;