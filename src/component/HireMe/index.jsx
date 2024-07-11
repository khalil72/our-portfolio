import React from 'react';

const HireMe = () => {
  return (
    <section className="ftco-section ftco-hireme img margin-top" style={{ backgroundImage: 'url(Assets/images/bg_1.jpg)' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7  text-center">
            <h2>
              I'm <span>Available</span> for freelancing
            </h2>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <p className="mb-0">
              <a href="#" className="btn btn-primary py-3 px-5">
                Hire me
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
