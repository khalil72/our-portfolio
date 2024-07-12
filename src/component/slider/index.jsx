import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { size } from 'lodash';

const Slider = () => {
  return (
    <MDBCarousel fade interval={2500} id="home-section">
      <MDBCarouselItem itemId={1} className="d-block w-100" style={{ height: '100vh' }} >
        <div className="container h-100">
          <div className="row  h-100 no-gutters align-items-center">
            <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-start ">
              <div className="text ">
                <span className="subheading">Hello!</span>
                <h1 className="mb-4 mt-3">I'm <span>  Khalil<br />Ahmed</span></h1>
                <h2 className="mb-4">A Passionate Front-End Developer</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-12  image-set image-postion" style={{
              backgroundImage: "url('Assets/images/profile33.png')",
            
            }}>
              <div className="overlay"></div>
            </div>
          </div>
        </div>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2} className="d-block w-100" style={{ height: '100vh' }} >
        <div className="container h-100">
          <div className="row  h-100 no-gutters align-items-center">
            <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-start  ">
            <div className="text text-start text-lg-left">
               <span className="subheading">Hello!</span>
                <h1 className="mb-4 mt-3">I'm a <span>front-end<br />Developer</span></h1>
                <h2>Based in Pakistan</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-12  image-set  image-postion" style={{
              backgroundImage: "url('Assets/images/profile33.png')",
             
            }}>
              <div className="overlay"></div>
            </div>
          </div>
        </div>
      </MDBCarouselItem>
    </MDBCarousel>
  );
};

export default Slider;
