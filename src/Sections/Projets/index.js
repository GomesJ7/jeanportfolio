import React, { lazy } from "react";
import styled from "styled-components";
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';
import { projects } from "../../data";
import wave from "../../assets/waves2.svg";
import './index.css';   


const Projet = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100%;
  margin
  padding:5rem 0;
  background-color: black;
`;
const Waves = styled.img`
  width: 100%;
  height: auto;
`;


const Projets = () => {

  return (
  <Projet id="projects">
    <Waves src={wave} alt="waves"  />
    <title className="titre">Quelques Projets...</title>

      <AwesomeSlider className='Slider'>
      {projects.map((project) => (
            <div data-src={project.image} className='project' alt={project.alt}>
              <div className='middle'>
                <div className='project-title'>{project.title}</div>
                <div className='description'>{project.description1}</div>
                <div className='description'>{project.description2}</div>
                <div className='description'>{project.description3}</div>
              </div>
            </div>
          ))}
    </AwesomeSlider>
    <a className="Button" href='https://github.com/GomesJ7'target="_blank">
      Voir les projets sur GIT
    </a>
  </Projet>
  );
};

export default Projets;
