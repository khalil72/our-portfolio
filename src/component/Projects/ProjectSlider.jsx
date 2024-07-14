import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { map } from 'lodash';
import ProjectsData from '../../assets/Data/projects';

const ProjectSlider = ({ settings, Projects }) => {
  // Log projects for debugging
//   console.log('Projects:', Projects);
  const [showMore, setShowMore] = useState(false);
  const [modal ,setModal] = useState(false);
 
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSeeMore = () => {
    setShowMore(true);
  };

  const handleShowLess = () => {
    setShowMore(false);
    
  };
  const handleModalShow = (project) => {
    setModal(true);
    setSelectedProject(project);
  }
  const handleModalOff = ()=>{
    setModal(false);
    setSelectedProject(null);
  }

  return (
    <div className='m-2'>
       <div className="container">
      <div className="row justify-content-center">
        {map(Projects?.slice(0 , 3),(item) => (
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
                 <span onClick={() => handleModalShow(item)} className='btn  mt-4'>See More</span>
               </div>
             </div>
           </div>

        ))}
         {showMore &&
            map(Projects.slice(3), (item) => (
              <div className="col-md-4 mb-4" key={item.id}>
                <div
                  className="project d-flex justify-content-center align-items-center"
                  style={{ backgroundImage: `url(${item.images})` }}
                >
                  <div className="overlay"></div>
                  <div className="text text-center p-4">
                    <h3>{item.name}</h3>
                    <span onClick={() => handleModalShow(item)} className='btn mt-4'>See More</span>
                  </div>
                </div>
              </div>
            ))}
      </div>

       <div className="text-center">
        {!showMore ? (
          <button className="btn btn-primary mt-4 py-3 px-5" onClick={handleSeeMore}>
            See More
          </button>
        ) : (
         ''
        )}
      </div>
      </div>

      {modal && (
        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-dark">{selectedProject?.name}</h5>
                <button type="button" className="close" onClick={handleModalOff} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body" style={{ position: 'relative' }}>
                <div
                  className="modal-project-img"
                  style={{
                    backgroundImage: `url(${selectedProject?.images})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat:'no-repeat',
                    height: '200px',
                    marginBottom: '1rem'
                  }}
                ></div>
                <p>{selectedProject?.desc || 'Modal body text goes here.'}</p>
                {selectedProject?.ref ===  '/' ? '' : 
                <a href={selectedProject?.ref } className='btn btn-primary'>visit now</a>
                }
                
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
     
    
    
  );
};

export default ProjectSlider;
