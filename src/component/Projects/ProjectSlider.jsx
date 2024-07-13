import React from 'react';
import Slider from 'react-slick';
import { map } from 'lodash';

const ProjectSlider = ({ settings, Projects }) => {
  // Log projects for debugging
  console.log('Projects:', Projects);

  return (
    <div className='m-2'>
       <div className="container">
      <div className="row justify-content-center">
        {Projects.map((item, index) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div
              className="project  d-flex justify-content-center align-items-center"
              style={{ backgroundImage: `url(${item.images})`
                
                
               }}
            >
              <div className="overlay"></div>
              <div className="text text-center p-4">
                <h3>
                 {item.name}
                </h3>
                <span>See More</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
    
  );
};

export default ProjectSlider;
