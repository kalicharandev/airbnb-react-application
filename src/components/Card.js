import React from "react";

export default function Card(props){ 
    let BadgeStatus;
    if(props.openSpots === 0){
        BadgeStatus = "SOLD OUT"
    }else if(props.location === 'Online'){
        BadgeStatus = "ONLINE"
    }
return(
    <div className="card">
       {BadgeStatus && <div className="card--badge">{BadgeStatus}</div>}
       <img src={`${process.env.PUBLIC_URL}  ${props.Img}`} className="card--image" />
            <div className="card--stats">
                <img src= {props.Str}className="card--star" />
                <span>{props.Rating}</span>
                <span className="gray">({props.Review}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From  $ {props.price}</span> / person</p>
        </div>
)
}