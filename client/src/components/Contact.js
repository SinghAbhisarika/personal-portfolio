import React, { useState } from 'react'
import {Modal,Button,Form} from 'react-bootstrap';
import "./contact.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contac from "../img/contac.jpg";

const Contact = () => {

  const [inputvalue, setInputvalue] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    message: ""
  });

  const getvalue = (e) => {
    const { name, value } = e.target;
    setInputvalue(() => {
      return {
        ...inputvalue,
        [name]: value
      }
    })

  }

  const sentUserdata = async (e) => {
    e.preventDefault();

    const { fname, lname, email, mobile, message } = inputvalue;
    if (fname === "") {
      toast.error("fname is require")
    } else if (lname === "") {
      toast.error("lname is require")
    } else if (email === "") {
      toast.error("email is require")
    } else if (!email.includes("@")) {
      toast.error("invalid email")
    } else if (mobile === "") {
      toast.error("mobile is require")
    } else {
      let result = await fetch("http://localhost:6002/registerContact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fname, lname, email, mobile, message
        })
      });
       result = await result.json();
       console.warn(result);

      if (result.fname) {
        toast.success("Your Response Submitted");
        setInputvalue({
          ...inputvalue,
          fname: "",
          lname: "",
          email: "",
          mobile: "",
          message: ""
        })
      }
    }
  }
  return (
    <>  
      <div className="contact" style={{
      backgroundImage: `url(${contac})`,
      // backgroundColor: "white",
      backgroundSize: "cover"
    }}>
        <div className='mainBox'>
        <h2 className='text-center'>Contact Me</h2>
        <div className="container mt-2 mb-3" >
          <Form className='row mt-2'>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Fname</Form.Label>
              <Form.Control type="text" name='fname' value={inputvalue.fname} onChange={getvalue} placeholder='Harry'/>
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6"  controlId="formBasicEmail">
              <Form.Label>Lname</Form.Label>
              <Form.Control type="text" name='lname' value={inputvalue.lname}  onChange={getvalue} placeholder='Potter'/>
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name='email' value={inputvalue.email}  onChange={getvalue} placeholder='harryPot@gmail.com'/>
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="text" name='mobile' value={inputvalue.mobile}  onChange={getvalue} placeholder='+1 456 234 8751'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} onChange={getvalue} value={inputvalue.message}  name="message" placeholder='Would love to hear from you..'/>
            </Form.Group>
            <div className='d-flex justify-content-center'>
              <Button variant="primary" className='col-lg-6 submit' type="submit" onClick={sentUserdata}>
                Submit
              </Button>
            </div>

          </Form>
          <ToastContainer />
        </div>
        </div>
      </div>
    </>
  )
}

export default Contact