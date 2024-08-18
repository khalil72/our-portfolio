/* eslint-disable jsx-a11y/anchor-is-valid */
import { map } from 'lodash';
import React from 'react';
import Information from '../../assets/Data/information';

const About = () => {
  return (
    <section className="ftco-about img ftco-section ftco-no-pb" id="about-section">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-6 col-lg-5 d-flex">
            <div className="img-about img d-flex align-items-stretch">
              <div className="overlay"></div>
              <div
                className="img d-flex align-self-stretch align-items-center"
                style={{ backgroundImage: 'url(Assets/images/profile33.png)' }}
              ></div>
            </div>
          </div>
          <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
            <div className="row justify-content-start pb-3">
              <div className="col-md-12 heading-section ">
                <h1 className="big">About</h1>
                <h2 className="mb-4">About Me</h2>
                <p>
                Bringing Ideas to Life with Code
                </p>
                <ul className="about-info mt-4 px-md-0 px-2">
                  {map(Information , (item ,index)=>(
                     <li className="d-flex">
                     <span>{item?.title}:</span> <span>{item?.text}</span>
                   </li>

                  ))}
                 
                 
                </ul>
              </div>
            </div>
            <div className="counter-wrap  d-flex mt-md-3">
              <div className="text">
               
                <p>
                  <a href="/Assets/pdf/Khalilahmed_frontendDeveloper.pdf" target="_blank" className="btn btn-primary py-3 px-3">
                    Download CV
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
