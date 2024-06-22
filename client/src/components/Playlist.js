import React, { useEffect, useState } from 'react'
import './Playlist.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel} from 'react-bootstrap';
import Modal from "./Modal";
import FS from "../img/FS.png";
import BP from "../img/BP.png";
import sum from "../img/sum.png";
import RA from "../img/RA.png";

const Playlist = () => {
  const [show,setShow]=useState(false)
  const [showModal,setShowModal]=useState(false)
  const handleButtonClick = () => {
    setShowModal(true);
  };
 
  const handleCloseModal = () => {
    setShowModal(false);
  };
  setTimeout(()=>{
    setShow(true)
  },4000)

  return (
    <div className='slides' style={{
      backgroundColor:'black'
      }}>
        {!show && <div className='introBfrSlides'>Presenting you few of my works at Deloitte....</div>}
      {show && <div className='slide'
>
        <Carousel interval={null}>
          <Carousel.Item>
            <img
              className="d-block img"
              src={BP}
              alt="First slide"
            />
            <Carousel.Caption>
              
              <button className="modal-btn" onClick={handleButtonClick}>Click to know more</button>
              {showModal && <Modal onClose={handleCloseModal} BP/>}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img"
              src={RA}
              alt="Second slide"
            />

            <Carousel.Caption>
              {/* <h3 className='work-title'>Related Articles Component </h3> */}
              <button className="modal-btn" onClick={handleButtonClick}>Click to know more</button>
              {showModal && <Modal onClose={handleCloseModal} RA/>}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img"
              src={sum}
              alt="Third slide"
            />

            <Carousel.Caption>
              {/* <h3 className='work-title'>Request Pick Up Component</h3> */}
              <button className="modal-btn" onClick={handleButtonClick}>Click to know more</button>
              {showModal && <Modal onClose={handleCloseModal} sum/>}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img"
              src={FS}
              alt="Fourth slide"
            />

            <Carousel.Caption>
              {/* <h3 className='work-title'>Summary</h3> */}
              <button className="modal-btn" onClick={handleButtonClick}>Click to know more</button>
              {showModal && <Modal onClose={handleCloseModal} FS/>}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>}
    </div>
  );
}
export default Playlist;  