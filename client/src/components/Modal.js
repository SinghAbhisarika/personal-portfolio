import React from 'react';
import './Modal.css';
 
const Modal = ({ onClose,BP,FS,sum,RA }) => {
    const projectData =
        {
            projectName1:"FEEDBACK SURVEY COMPONENT",
            desc1:"The feedback survey component is a React-based interactive interface designed to collect feedback from users and transmit it to an external API endpoint. This component is implemented with a focus on user experience, data validation, and seamless integration with backend services.",
            projectName2:"REQUEST PICK UP",
            desc2:"The pick-up request component is a React-based feature designed for a client’s waste collection service, allowing users to conveniently request waste pick-up directly from their address. To enhance usability, the address bar is equipped with an autocomplete feature that suggests various addresses as the user types, leveraging an external address lookup API or dataset. Once the user selects an address and submits the form, the request is asynchronously sent to the server using the fetch API, ensuring efficient and reliable communication with the backend.",
            projectName3:"SHOW RELATED ARTICLES",
            desc3:"The Related Articles component is a dynamic feature within our platform aimed at providing users with relevant content based on current SEO trends, ensuring that the displayed articles refresh daily to maintain topical relevance. Built using React, this component leverages backend APIs to fetch and display articles that align with trending search engine optimization topics. This daily update mechanism ensures that users receive up-to-date information, enhancing engagement and user retention.",
            projectName4:"SUMMARY",
            desc4:"The summary component serves as a pivotal element in our application, facilitating the delivery of text-based updates or news sourced from our backend to users. Developed using React, this component dynamically fetches and displays content that is crucial for our audience, ensuring timely dissemination of information. By leveraging efficient API calls, it retrieves the latest updates seamlessly, guaranteeing accuracy and reliability in content delivery."
        }
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        { FS && <div className='mainModal'><h3 className='work-title'>{projectData.projectName1}</h3>
        <p className='check'>{projectData.desc1}</p>
        </div>}
        { BP && <div className='mainModal'><h3 className='work-title'>{projectData.projectName2}</h3>
        <p className='check'>{projectData.desc2}</p>
        </div>}
        { RA && <div className='mainModal'><h3 className='work-title'>{projectData.projectName3}</h3>
        <p className='check'>{projectData.desc3}</p>
        </div>}
        { sum && <div className='mainModal'><h3 className='work-title'>{projectData.projectName4}</h3>
        <p className='check'>{projectData.desc4}</p>
        </div>}
      </div>
    </div>
  )}

export default Modal;