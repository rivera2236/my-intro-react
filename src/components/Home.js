import React from 'react';
import './css/normalize.css'; 
import './css/styles.css'; 
import Navigation from './Navigation';

 
const Home = () => {
    return (
      <div>  
        <header>
          <img alt="picture of Jorge" class="profile-image" src={require('./images/jorge.jpg')} />
          <h1 class="tag name">Hello, I’m Jorge.</h1>
          <p class="tag location">Open To Work</p>
        </header>

        <main class="flex">
          <div class="card">
            <h2>#Goals</h2>
            <p>I’m an aspiring web designer and developer who loves everything about the web. I've lived in lots of different places and have worked in lots of different jobs. I’m excited to bring my life experience to the process of building fantastic looking and functioning websites.</p>
            <p>I am a life-long learner who's always interested in expanding my skills.</p>
            <p><br />
              <img width="100%" alt="IMG HERE" class="profile-image" src={require('./images/desk_work.jpg')} />
            </p>
          </div>

          <div class="card">
            <h2>Experience</h2>
            <p>In the past 4 years I've workered with technologies that include:</p>
            <ul class="skills">
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>Node.JS</li>
              <li>Express</li>
              <li>React</li>
              <li>Material.UI</li>
              <li>Ruby</li>
              <li>Rails</li>
              <li>AWS</li>
            </ul>
            <p>I’d like to work for a web design firm helping clients create an impressive online presence.</p>
            <p>
              <img width="100%" alt="IMG HERE" class="profile-image" src={require('./images/working.jpg')} />
            </p>
          </div>

        </main>
        <footer>
          <center>  
            <ul>
              <li><a href="https://www.linkedin.com/in/jorge-rivera-618595197" class="social linkedin">LinkedIn</a></li>
              <li><a href="https://github.com/rivera2236" class="social github">Github</a></li>
            </ul>
            <p class="copyright">Copyright 2020, Jorge Rivera</p>
          </center> 
        </footer>
      </div>
    );
}
 
export default Home;