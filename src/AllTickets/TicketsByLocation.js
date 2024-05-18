import React, { useEffect, useState } from "react";
import axios from "axios";
import IndividualTickets from "./IndividualTickets";
import "./individualTicket.css";

function TicketsByLocation({location}) {
  const[status, setStatus] = useState("all");
    
  const [count, setCount] = useState(0);

  const[responseData, setResponseData] = useState([]);


  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/tickets/location/${location}/${status}`);
            console.log(response.data);
           setResponseData(response.data);
          //console.log(responseData);
        } catch (err) {
          console.log(err);
        }
      };
  
      // Run the function initially
      fetchData();
  
      // Set interval to run the function every 5 seconds
      const intervalId = setInterval(() => {
        fetchData();
        setCount((prevCount) => prevCount + 1); // Update count to re-run useEffect
      }, 5000);
  
      // Cleanup function to clear the interval when the component unmounts
      return () => {
        clearInterval(intervalId);
      };
    }, [location, status]);

    const handleChange = (event) =>{
      setStatus(event.target.value);
    }

    return (
      <div className="ticketsDiv">
            <select className="select-container" value={status} onChange={handleChange}>
              <option value="all">All</option>
              <option value="open">Open</option>
              <option value="pending">Pending</option>
              <option value="complete">Completed</option>
              <option value="referred">Referred</option>
              <option value="closed">closed</option>

            </select>
         
            <div className="ticketsContainer">

              {responseData.map(mData=>{
                if(mData.description)
                {
                  return (
            
                    <div>
                      <IndividualTickets image={mData.image} title={mData.title} description={mData.description} status={mData.status} reportID={mData.reportid} userID={mData.userid} created_at={mData.timestamp} updated_at={mData.updated_at}/>
                    </div>
                )

                }
                
                
              })}
            </div>


      </div>
  );
}

export default TicketsByLocation;