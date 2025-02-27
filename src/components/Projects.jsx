import React from "react";
import Title from "./Title";
import lively from "../images/projects/lively-balloons.png";
import invaders from "../images/projects/invaders.png";
import hangman from "../images/projects/hangman.png";
import website from "../images/projects/website.png";
import weather from "../images/projects/weather.png";
import crypto from "../images/projects/crypto-tracker.png";
// import progress from "../images/projects/progress.png";

function EachProject(props) {
  return(
    // Note: Project images are 5in x 3in, 72 px/in
    <div className="col eachProjectSpacing" data-aos="zoom-in-up" data-aos-once="true" data-aos-duration="800">
      <a href={props.link} target="_blank" rel="noreferrer">
        <button className="removeDecoration centerBlock ">
        <div className="image-project-container">
          <h4>{props.name}</h4>
          <p>{props.description}</p>
          <img className="eachProjectHover black-border" src={props.image} alt={props.name}></img>
        </div>
        </button>
      </a>
    </div>
  );
}

function Projects() {
  return (
    <div className="section page-container" id="projectsSection">
      <div className="container">
        <Title text="P R O J E C T S"/>
        <div className="container projectSpacing">
          <div className="row">
            <EachProject 
              name="sharanya.github.io" 
              image={website} 
              description="My portfolio website created with React, Bootstrap, HTML, CSS and Javascript." 
            />
            <EachProject 
              name="Cryptocurrency Tracker" 
              image={crypto} 
              description="Web application to keep track of your cyprtocurrency worth created with React JS." 
            />
            <EachProject 
              name="Hangman" 
              image={hangman} 
              description="Client Server Game created with Python and sockets." 
            />
            <EachProject 
              name="Greenhouse Invaders" 
              image={invaders} 
              description="Space invader inspired game for OSU Fall 2021 Hackathon created with Python, and Pygame." 
            />
            <EachProject 
              name="Current Weather" 
              image={weather} 
              description="Simple web application that gets the current weather for specified location by calling openweathermap API." 
            />
            <EachProject 
              name="Lively Balloons" 
              image={lively} 
              description="My first website created with HTML, CSS, Bootstrap and Javascript." 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;