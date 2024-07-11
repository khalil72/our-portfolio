import React from 'react'

const Contact = () => {
  return (
    <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
      <div className="container">
      	<div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ">
            <h1 className="big big-2">Contact</h1>
            <h2 className="mb-4">Contact Me</h2>
            <p>Get in Touch and Let's Collaborate</p>
          </div>
        </div>

        <div className="row d-flex contact-info mb-5">
          <div className="col-md-6 col-lg-4 d-flex ">
          	<div className="align-self-stretch box p-4 text-center">
          		<div className="icon d-flex align-items-center justify-content-center">
          			<span className="icon-map-signs"></span>
          		</div>
          		<h3 className="mb-4">Address</h3>
	            <p>Pakistan ,Chakwal</p>
	          </div>
          </div>
          <div className="col-md-6 col-lg-4 d-flex ">
          	<div className="align-self-stretch box p-4 text-center">
          		<div className="icon d-flex align-items-center justify-content-center">
          			<span className="icon-phone2"></span>
          		</div>
          		<h3 className="mb-4">Contact Number</h3>
	            <p>+92311 5691357</p>
	          </div>
          </div>
          <div className="col-md-6 col-lg-4 d-flex ">
          	<div className="align-self-stretch box p-4 text-center">
          		<div className="icon d-flex align-items-center justify-content-center">
          			<span className="icon-paper-plane"></span>
          		</div>
          		<h3 className="mb-4">Email Address</h3>
	            <p>muhmmadkhalilahmed@gmail.com</p>
	          </div>
          </div>
         
        </div>

      
      </div>
    </section>
  )
}

export default Contact