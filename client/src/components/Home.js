import { React, useState} from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = () => {
  // const [darkMode,setDarkMode]=useState(false)
  // setTimeout(()=>{
  //    setDarkMode(true)
  // },3000)
  // if(darkMode){
  //   console.log("hi >>");
  //   setTimeout(()=>{
  //     setDarkMode(false)
  //  },10000)
  // }
  return (
    <>
      <div className="home_container" >
        <div className="home_innerdiv">
          <div className="left_div">
            <h2>Hello! I am <span style={{ color: "#6c63ff" }}>Web Developer</span></h2>
            <p style={{ color:"#666", letterSpacing: ".5px", marginTop: 2 }}>Experienced Frontend Developer with 2 years of experience specializing in React JS and its related concepts.
Proficient in crafting responsive and intuitive user interfaces, I bring a passion for clean code and an eye for
detail to every project. My expertise extends to client interaction, where I excel in understanding client
requirements, providing technical solutions, and ensuring smooth communication throughout the
development process.</p>
            <div className="btn_div mt-4">
              <Button variant="danger" style={{ letterSpacing: "1px", border: "none", borderRadius: 4, background: "#2f2d69", marginRight: 24 }}><a href="Abhisarika_Singh_resume.pdf" className='resume' download>
                Resume
              </a></Button>
              <Button variant="danger" style={{ letterSpacing: "1px", border: "none", borderRadius: 4, background: "#6c63ff" }}><Link to='/contact' className='resume'>Say Hi!</Link></Button>
            </div>
          </div>
          <div className="right_div">
            <img src="harsh.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home