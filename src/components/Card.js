import React from "react";
import location from '../images/location.png';

export default function Card(props){
    return(
        <div className="card-container">
            <div className="card">
            <div className="img--div">
                <img src={props.image} className="card--img"/>
            </div>
            <div className="card--content">
           <div className="info-top">
            <p className="location"> <img src={location} className="location-pin"/> {props.location}</p>
            <a className="search" href= "https://google.com">View on Google Maps</a>
           </div>
           <h1 className="title">{props.title}</h1>
            <p className="date">{props.date}</p>
            <p className="description">{props.description}</p>
            </div>
        </div>
        <hr className="line"></hr>
        </div>

    )
}