import React, { useState, useEffect } from "react";
import "./MainTicket.css"; // Import CSS file for styles
import axios from "axios";
import {NavLink, useHistory} from "react-router-dom";


function MainTicket({ticketID}) {
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  const history = useHistory();
  const[response, setResponseData] = useState([]);
  

  const[loc, setLoc] = useState([]);
  const[ticketStatus, setTicketStatus] = useState("open");
  const[updatedResponse, setUpdatedResponse] = useState({
    status: ticketStatus,
    title:"",
    emailTo: "",
    message:"",
    ticketId: ticketID,
    subject: "",
    image:""
  });


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/tickets/location/ticket/${ticketID}`);
       // console.log(response.data[0].location);
        console.log(response);
        setTicketStatus(response.data[0].status);
        setResponseData(response.data[0]);
        setLoc(response.data[0].location)
        setUpdatedResponse({...updatedResponse,
          status: response.data[0].status,
          title: response.data[0].title,
          image:response.data[0].image
        })
        console.log(response.data);
        //console.log(responseData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [ticketID]);

  async function clickedUpdate()
  {
    try {
      const response = axios.post(`http://localhost:3000/tickets/location/ticket/${ticketID}`, [updatedResponse]).then(response => {
        history.goBack();
      })
     // console.log(response.data[0].location);
     console.log(response.data);

      
      //console.log(responseData);
    } catch (err) {
      console.log(err);
    }
  }

  

  return (
    <div>
      <div className="ticket-container"> {/* Added a class for styling */}
        <div className="selectedTicket">
          {response && (
            <div>
              <input type="text" value={updatedResponse.title} onChange={(e) => {setUpdatedResponse({...updatedResponse, title: e.target.value })}} className="input-field" />
              <div className="ticket-description">{response.description}</div>
              <div className="location">Location: {loc.join(', ')} </div>
              <div className="location">Sender: {response.email}</div>
              <div>
              <a href={updatedResponse.image} target="_blank" rel="noopener noreferrer">

                <img
                    src={updatedResponse.image}
                    height={200}
                    width={200}
                    alt="Aurora University Logo"
                  />
                </a>
              </div> 
            </div>
          )}
        </div>
  
        <div className="divEmail">
        <div class="grid-container">
        <div class="form-group">
        <div class="row">
        <label>To:</label>
        <input 
            value={updatedResponse.emailTo}
            className="emailSubject"

            placeholder="Recipient email"
            onChange={(e) => {
                setUpdatedResponse({
                    ...updatedResponse, 
                    emailTo: e.target.value 
                });
            }} />
    </div>

    <div class="row">
        <label>Subject:</label>
        <input 
            className="emailSubject"
            value={updatedResponse.subject}
            placeholder="Subject"
            onChange={(e) => {
                setUpdatedResponse({
                    ...updatedResponse, 
                    subject: e.target.value 
                });
            }} />
    </div>
</div>
            
  
          <textarea
          type="text"
          placeholder="Add your message here..."
          className="message-input"
          onChange={(e) => {
            setUpdatedResponse({
              ...updatedResponse, 
              message: e.target.value 
            });
          }}
            />
            <div>image attached to email</div>
        </div>
  
        <select value={updatedResponse.status} onChange={(e)=>{setUpdatedResponse({...updatedResponse, status:e.target.value })}} className="status-dropdown">
          <option value="open">Open</option>
          <option value="pending">Pending</option>
          <option value="complete">Completed</option>
          <option value="referred">Referred</option>
          <option value="closed">closed</option>

        </select>
        
        <button type="button" className="status-button" onClick={clickedUpdate}>
          {/* Added a class for styling */}
          Update Ticket
        </button>
      </div>
    </div>
    </div>
  );
}

export default MainTicket;
