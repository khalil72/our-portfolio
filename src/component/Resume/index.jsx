import React from 'react'

const Resume = () => {
  return (
    <section className="ftco-section ftco-no-pb" id="resume-section">
    <div className="container">
        <div className="row justify-content-center pb-5">
      <div className="col-md-10 heading-section text-center ">
          <h1 className="big big-2">Resume</h1>
        <h2 className="mb-4">Resume</h2>
        <p>A Journey Through My Professional Path </p>
      </div>
    </div>
        <div className="row">
            <div className="col-md-6">
                <div className="resume-wrap ">
                    <span className="date">2015-2020</span>
                    <h2>Bachelor Science of Computer Science</h2>
                    <span className="position">University of Sargodha</span>
                    <p className="mt-4">Gained a solid foundation in computer science principles and practices. Specialized in software development and system design. Completed projects that enhanced practical and theoretical knowledge.</p>
                </div>
            </div>

            <div className="col-md-6">
            <div className="resume-wrap ">
                    <span className="date">04/2021-08/2023</span>
                    <h2>User Interface Design and Collaboration</h2>
                    <span className="position">Pin 92</span>
                    <p className="mt-4">Designed visually appealing and user-friendly interfaces for platforms such as Pin92, Property051, Bahria Housings, and LMS etc. Collaborated with team members and integrated with backend systems to retrieve and manage data.</p>
                </div>
            </div>
            {/* <div className="col-md-6">
            <div className="resume-wrap ">
                    <span className="date">08/2023-12/2023</span>
                    <h2>Proficient in Angular and UI Development</h2>
                    <span className="position">Capital Smart City</span>
                    <p className="mt-4"> Expert in executing API integrations to enhance CRUD operations and overall application functionality. Skilled in creating secure and intuitive interfaces with authentication, utilizing Bootstrap for design, and integrating Metronic themes for improved visual appeal.</p>
                </div>
            </div> */}
            <div className="col-md-6">
            <div className="resume-wrap ">
                    <span className="date">12/2023-6/2024</span>
                    <h2>Development and Integration Experience</h2>
                    <span className="position">Zam Software Solutions</span>
                    <p className="mt-4"> Developed the Intercloud9 SMS system using React.js, incorporating full design with Metronic integration and Redux Toolkit for state management. Created and integrated APIs using Laravel, and contributed to other projects such as Profit Coach.</p>
                </div>
            </div>
            
            <div className="col-md-6">
            <div className="resume-wrap ">
                    <h2>GitHub Contributions</h2>
                    <span className="position"><a href='https://github.com/khalil72'>Visit Now</a></span>
                    <p className="mt-4"> Showcase of various projects and contributions to open-source communities. Regularly update repositories with code improvements, bug fixes, and new features. Actively engage with issues and pull requests to collaborate with other developers.</p>
                </div>
            </div>
            <div className="col-md-6">
               <div className="resume-wrap ">
                    <h2>GitLab Projects</h2>
                    <span className="position"><a href='https://gitlab.com/khalilahmed.property051'>Visit Now</a></span>
                    <p className="mt-4"> 
                    Managed and developed projects with GitLab, utilizing features such as CI/CD pipelines, issue tracking, and version control. Contributed to team workflows and repository management to ensure efficient development processes.
                    </p>
                </div>
            </div>
            </div>
            
            
        
        <div className="row justify-content-center mt-5">
            <div className="col-md-6 text-center ">
                <p><a href="/Assets/pdf/Khalilahmed_frontendDeveloper.pdf" className="btn btn-primary py-4 px-5">Download CV</a></p>
            </div>
        </div>
    </div>
</section>

  )
}

export default Resume 