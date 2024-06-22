import React from 'react'
import "./About.css"
import grad from "../img/gard.jpg"

const About = () => {
  return (
    <div className="about_container" style={{ backgroundImage: `url(${grad})`, backgroundSize: "cover" }}>
      <div className='container main_container d-flex'>
        <div className="left_container mb-3 ab"><p className='mt-3'>
          <div><div className='hello'>Experience</div><img className="logo" src="dellogo.jpg" alt="" />
          <span className='deloitte'>Deloitte USI</span></div>
          <div className="del desc">- Developed standalone UI components<br />
          - Integrated frontend with backend APIs<br />
          - Conducted SEO Proof of Concepts (POCs)<br />
          - Provided deployment assistance<br />
          - Conducted KT sessions<br />
          - Critical defect resolution<br />
          - Direct client engagement</div>
          <div className='awards'>
          <span className='deloitte'>Awards Won</span>
          <p>Spot Award</p>
          <p>Warriors Award</p></div></p></div>
        <div className="right_container mb-3 ab"><p className='mt-3'>
        <div className='hello1'>Qualification</div>
          <div className='graduation'><b class="fa fa-graduation-cap" aria-hidden="true">   Graduation</b><ul><li>Bachelor of Technology (2018-2022)</li>
            <li>Dr B R Ambedkar NIT Jalandhar,Punjab</li><li>CGPA 8.57</li></ul></div>
          <div className='senior secondary'><b class="fa fa-book" aria-hidden="true">   Intermediate</b><ul><li>PCM (2016-2018)</li><li>Param Gyan Niketan,Gaya,Bihar</li><li>79.4 %</li></ul></div>
          <div className='Matrix'><i class="fa-solid fa-pen">   Matriculation</i><ul><li>Hansraj Public School,Kharanti,Bodh Gaya</li><li>10 CGPA</li></ul></div></p>
        </div>
      </div>
    </div>

  )
}

export default About