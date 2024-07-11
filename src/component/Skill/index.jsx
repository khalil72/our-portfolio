import { map } from 'lodash';
import React from 'react';
import SkillsSet from '../../assets/Data/SkillsList';

const Skill = () => {
  return (
    <section className="ftco-section" id="skills-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center">
            <h1 className="big big-2">Skills</h1>
            <h2 className="mb-4">My Skills</h2>
            <p>My Skill Set and Expertise</p>
          </div>
        </div>
        <div className="row">
          {map(SkillsSet,(skill,index)=>(
             <div className="col-md-6 animate-box" key={index}>
             <div className="progress-wrap">
               <h3>{skill.name}</h3>
               <div className="progress">
                 <div
                   className={`progress-bar ${skill.color}`}
                   role="progressbar"
                   aria-valuenow={skill.value}
                   aria-valuemin="0"
                   aria-valuemax="100"
                   style={{ width: `${skill.value}%` }}
                 >
                   <span>{skill.value}%</span>
                 </div>
               </div>
             </div>
           </div>
         ))}

        
          
        
         
        </div>
      </div>
    </section>
  );
};

export default Skill;
