import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

const Slider = () => {
  return (
    <MDBCarousel fade interval={3000}>
      <MDBCarouselItem itemId={1} className="d-block w-100" style={{ height: '100vh' }}>
        <div className="d-flex align-items-center" style={{ height: '100%' }}>
          <div className="w-50 d-flex justify-content-center align-items-center">
          <div class="text">
		          		<span class="subheading">Hello!</span>
			            <h1 class="mb-4 mt-3">I'm <span>Khalil<br />Ahmed</span></h1>
			            <h2 class="mb-4">A Passionate Front-End Developer</h2>
			          
		            </div>
          </div>
          <div className="w-50" style={{
            backgroundImage: "url('Assets/images/profile1.png')",
            backgroundSize: 'contain',
            backgroundPosition: 'center bottom',
            backgroundRepeat: 'no-repeat',
            height: '100%'
          }}></div>
        </div>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2} className="d-block w-100" style={{ height: '100vh' }}>
        <div className="d-flex align-items-center" style={{ height: '100%' }}>
          <div className="w-50 d-flex justify-content-center align-items-center">
          <div class="text">
		          		<span class="subheading">Hello!</span>
			            <h1 class="mb-4 mt-3">I'm a <span>Front-End<br />Developer</span> </h1>
                  <h2>Based in Pakistan</h2>
			          
			          
		            </div>
          </div>
          <div className="w-50" style={{
            backgroundImage: "url('Assets/images/profile33.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            height: '100%'
          }}></div>
        </div>
      </MDBCarouselItem>
    </MDBCarousel>
  );
};

export default Slider;
