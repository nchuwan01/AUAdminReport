import React, { useState } from 'react';
import './individualTicket.css';
import { Button } from 'bootstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';



const IndividualTickets = ({ image,title, description, status, reportID, userID, created_at, updated_at }) => {
    console.log(image);
    const [colorStatus, setColorStatus] = useState("yellow");
    const stringLINK= "../ticket/"+reportID;
    const options = { timeZone: 'Pacific/Honolulu', year: 'numeric', month: '2-digit', day: '2-digit' };

    const date = new Date(updated_at);
    const date2 = new Date(created_at);






    return (
            <Link to={stringLINK}>
                <div className="ticket">
                    <div className='mainDetails'>
                    <img 
                            id='imgTicket'
                            src={image}
                
                            alt="Aurora University Logo"
                            /> 

                    </div>
                    <div className='mainDetails'>
                        <div className="title">{title}</div>
                        <div className='desc'>{description}</div>
                        <div className="status">Status: {status}</div>

                    </div>
                
                   
                    
                    
              
                    <div id='imgAndTime'>
                           
                        
                            <div id='createdCSS'>
                                Updated at: { date.toLocaleString('en-US', options)} {date.toLocaleTimeString('en-US', { timeZone: 'Pacific/Honolulu' })}
                            </div>
                            <div id='updatedCSS'>
                                Created at: { date2.toLocaleString('en-US', options)} {date2.toLocaleTimeString('en-US', { timeZone: 'Pacific/Honolulu' })}

                            </div>
                        </div>
                    </div>

            </Link>

    );
};

export default IndividualTickets;