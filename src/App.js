import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Centennial from "./locations/centennial"; // Import the JavaScript file for Centennial Hall
import ManageLocation from './TicketLocationNav/ManageLocation';


// Import other building components as needed

function App() {
    return (
        <Router>
                <ManageLocation/>        
        </Router>

    );
}

export default App;
