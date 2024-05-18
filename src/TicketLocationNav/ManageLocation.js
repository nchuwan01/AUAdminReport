import React, { useState,useEffect } from "react";
import {BrowserRouter as Router, Route, Switch, Link, NavLink, useHistory} from 'react-router-dom';
import MainTicket from "../Ticket/MainTicket";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import TicketsByLocation from "../AllTickets/TicketsByLocation";
import "./../AllTickets/individualTicket.css";



function ManageLocation() {
    const [selected, setSelected] = useState(null);
    const[response, setResponseData] = useState([]);
    const history = useHistory();

    useEffect(  () => {
            const response = axios.get(`http://localhost:3000/tickets/location/getAllLocations`).then((res) =>{
                    console.log(res.data);
                    setResponseData(res.data);
            });           
          
    
      },[]);
     
      function handleSelectChange(e)
    {

        console.log()
        let value = (e.target.value).split(" ")[0];
        if(e.target.value == "Hill Welcome Center and Tapper Recital Hall")
        {
            value= "Welcome";
        }
       // console.log(value);
        history.push(`../${value}/all`);
        //navigate.push("/");
       // history.push("/hey");
     //   window.history.pushState("/hello");
      //  console.log(e.target.value);        
    }

    const handleItemClick = (id) => {
        setSelected(id);
    };
    

    return (
        <div className="container-fluid">
                <div className="locDropDown" >   
                 <select className="select-container" onChange={handleSelectChange}>
                 <option>
                    <span className='innerLocationTab'>All</span>
                </option>
                 {response.map(mData=>{

                                    if(mData.first_word)
                                    {
                                        if(mData.buildingname == "Hill Welcome Center and Tapper Recital Hall")
                                        {
                                            mData.first_word = "Welcome";
                                        }
                                        return (
                                            <option>
                                                    <span className='innerLocationTab'>{mData.buildingname}</span>

                                            </option>


                                        )
                                    }


                                })}

                   
                    

                </select>
                </div>

                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark navSide">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 ">
                            <Link to="/tickets/location/All" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none ">
                                <span className='innerLocationTabLoc'>Locations</span>
                            </Link>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start outerDiv" id="menu">
                                <li className={`nav-item hoveredLocation ${selected === "All" ? 'active' : ''}`} id="All" onClick={() => handleItemClick("All")}>
                                    <Link to="/tickets/location/All/all" className="nav-link align-middle px-0 ">
                                        <span className='innerLocationTab'>All</span>
                                    </Link>
                                </li>
                                {response.map(mData=>{
                                    if(mData.first_word)
                                    {
                                        if(mData.buildingname == "Hill Welcome Center and Tapper Recital Hall")
                                        {
                                            mData.first_word = "Welcome";
                                        }
                                        return (
                                            <li className={`nav-item hoveredLocation ${selected === mData.first_word ? 'active' : ''}`} id={mData.first_word} onClick={() => handleItemClick(mData.first_word)}>

                                                <Link to={`/tickets/location/${mData.first_word}/all`} className="nav-link align-middle px-0">
                                                    <span className='innerLocationTab'>{mData.buildingname}</span>
                                                </Link>
                                            </li>


                                        )

                                    }
                                })}

                               
                                
                            </ul>
                        </div>
                    </div>



                    <Switch>
                        <Route path="/tickets/location/All" exact={false} render={() => <TicketsByLocation location="All" />} />
                        <Route path="/tickets/location/Dunham" exact={false}  render={() => <TicketsByLocation location="Dunham" />} />
                        <Route path="/tickets/location/Alumni" exact={false}  render={() => <TicketsByLocation location="Alumni" />} />
                        <Route path="/tickets/location/Stephens" exact={false}  render={() => <TicketsByLocation location="Stephens" />} />
                        <Route path="/tickets/location/ticket" exact={false}  render={() => <MainTicket ticketID={window.location.href.split("/")[6]} />} />

                    </Switch>
                </div>
        </div>
    );
}

export default ManageLocation;