import React from 'react';
import './App.css';

//import {Link} from "react-router-dom";

class VerticalNavBar extends React.Component {
    render() {
        const buildings = [
            "Alumni Hall"
            // { name: "Alumni Hall", link: "locations/alumni" },
            // { name: "Centennial Hall", link: "locations/centennial" },
            // "Dunham Hall",
            // "Eckhart Hall",
            // "Institute for Collaboration",
            // "Jenks Hall",
            // "Learning Resource Center",
            // "Peterson Hall",
            // "University Banquet Hall",
            // "Wilkinson Hall"
        ];

        return (
            <div className="vertical-nav">
                <h2>Buildings at Aurora University</h2>
                <ul>
                    {/*{buildings.map((building, index) => (*/}

                    {/*    // <li key={index}><a href="#">{building}</a></li>*/}
                    {/*    // <li key={index}><link href="locations/alumni.js">{building}</link></li>*/}
                    {/*))}*/}
                    <li><a href ="/alumni">Alumni Hall</a></li>
                    <li><a href="/centennial">Centennial Hall</a></li>
                    {/*<li><a href="#">Services</a></li>*/}
                    {/*<li><a href="#">Contact</a></li>*/}

                </ul>
            </div>
        );
    }
}

export default VerticalNavBar;




