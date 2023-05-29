import React from "react";
import './aboutus.css';

export default function About() {
    return (
        <div style={{
            marginTop: "50px", marginBottom: "50px", padding: "0px 44px 0px 44px"
        }} >
            <div className="about-section">
                <img src="	https://static-assets-web.flixcart.com/www/promos/new/20141125-225730-header.png" alt="" style={{ width: "100%" }} />
                <h2>LAUNCHED IN APRIL 2023</h2>
                <h3>This website is India's leading e-commerce markertplace with over 30 million products across 30+ categories</h3>
            </div>
            <div style={{marginTop:"20px", textAlign:"center"}}>
                <img src="https://static-assets-web.flixcart.com/www/promos/new/20141125-225805-handbag.png" alt="" />
            </div>
        
            
            <div className="row">
            <h2 style={{textAlign:"center", color: "#4B3049"}}>Our Team</h2>
                <div className="column">
                    <div className="card">
                        <img src="https://www.w3schools.com/w3images/team1.jpg" alt="Jane" style={{ width: "100%" }} />
                        <div className="container">
                            <h2>Jane Doe</h2>
                            <p className="title">CEO</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>jane@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src="https://www.w3schools.com/w3images/team2.jpg" alt="Mike" style={{ width: "100%" }} />
                        <div className="container">
                            <h2>Mike Ross</h2>
                            <p className="title">Product Manager</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>mike@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src="https://www.w3schools.com/w3images/team3.jpg" alt="John" style={{ width: "100%" }} />
                        <div className="container">
                            <h2>John Doe</h2>
                            <p className="title">Customer Support, Manager</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>john@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}