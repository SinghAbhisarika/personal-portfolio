import React from 'react'
import "./footer.css"

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <>
      <div className="footer">
        <div className="container footer_container d-flex justify-content-between flex-wrap">
          <div className="first mt-5">
            <h4>Abhisarika Singh</h4>
            <p>© {year} Abhisarika Singh All rights reserved</p>
          </div>
          <div className="second mt-5">
            <h4>Get In Touch</h4>
            <p><i className='fa-brands fa-linkedin'>< a href='https://www.linkedin.com/in/abhisarika-s-509a8b178/' className='linkedin' target="_blank">  in/abhisarika-s-509a8b178/</a></i></p>
            <p><i className='fa-solid fa-square-envelope'></i> singhabhi292005@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer