import React from 'react'
import Image from "./Image";

function Card(props) {
    return (
        <div className="card">
            <div className="top">
                 <div className="name">{props.name}</div>
                 <Image  img={props.img}/>                 


            </div>
            <div className="bottom">
    <div className="info">{props.phone}</div>
    <div className="info">{props.email}</div>

            </div>
           
        </div>
    )
}

export default Card
