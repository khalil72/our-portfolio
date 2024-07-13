import { map } from 'lodash';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectSlider from './ProjectSlider';
import ProjectsData from '../../assets/Data/projects';
const Projects = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className="ftco-section ftco-project" id="projects-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          
          <div className="col-md-12 heading-section text-center ">
            <h1 className="big big-2">Projects</h1>
            <h2 className="mb-4">Our Projects</h2>
            <p>Showcasing Our Work</p>
          </div>
        </div>
   
        <ProjectSlider settings={settings} Projects={ProjectsData } />
        </div>
     
      
    </section>
  );
};

export default Projects;
