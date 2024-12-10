import React from 'react';
import Contact from './Contact'
export default function HeroStory(){
    return(
        <div id="main">
          <div id="leftContainer">
            <h1 id="hero" data-aos="fade-up">
              Learn about <span id="ai" style={{color: '#8affb9', textShadow: '0 10px 30px rgb(92, 182, 129)', display: 'inline'}}>Dhruv Dodda!</span>
            </h1>
            <p id="description" data-aos="fade-up">
                Hi guys! My name is Dhruv Dodda, and I'm a Computer Science student at Georgia Tech with a strong foundation in full-stack development. I have experience in developing secure web applications, engineering AI-driven platforms, and contributing to large-scale software systems.
              
                I'm passionate about leveraging technology to solve complex problems and continuously expanding my technical expertise. 
            </p>
            <p id="description" data-aos="fade-up">
            Welcome to my website!
            </p>
          </div>
        </div>
    )
}