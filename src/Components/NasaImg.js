import React from "react";

// I actually styled this with in the App.css file.
// probably not wise to have multiple stylings in multiple places
// again, seems unweildy at scale but for the sake of the assignment
// this is fine

export default function NasaImg(props){

    return(
        <img src={props.imageURL} />
        );
};