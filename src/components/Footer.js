import React from "react";

function Footer(props) {
    return (<div className="details">
        <h5>{props.district}</h5>
        <p>{props.location}</p>
        <p>{props.phone}</p>
        <p>{props.email}</p>
    </div>
    )
}


export default Footer;