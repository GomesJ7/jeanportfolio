import React, { lazy } from "react";
import styled from "styled-components";
import wave from "../../assets/waves2.svg";
import { projects } from "../../data";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import './index.css'; 

const Projet = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width: 100vw;
  height: 100vw;
  margin
  padding:5rem 0;
  background-color: black;
`;
const Waves = styled.img`
  margin-top: -11rem;
  width: 100%;
  height: auto;
`;
const Title = styled.h1`
  text-align: center;
  color:whitesmoke;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1rem;
  position: relative;
    content: "";
    height: 1px;
    width: 50%;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    border-bottom: 2px solid var(--purple);
`;

const Carousal = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #ffffff;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #ffffff;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const Button = styled.button`
background-color: whitesmoke;
padding: 0.5rem 1rem;
border-radius: 20px;
color: var(--purple);
font-weight: 600;
cursor: pointer;
transition: all 0.2s;
left: 25%;
position: relative;
margin-bottom: 1rem;
`;

const Projets = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
  <Projet id="projects">
    <Waves src={wave} alt="waves"  />
    <Title>Quelques Projets...</Title>
    <Carousal>
        <Slider {...settings}>
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
        </Slider>
        
      </Carousal>
      <Button href='https://github.com/GomesJ7'target="_blank">
            Voir les projets sur GIT
      </Button>
  </Projet>
  );
};

export default Projets;
