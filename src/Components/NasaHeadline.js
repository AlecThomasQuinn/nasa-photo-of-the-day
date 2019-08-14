import React, { useState, useEffect } from "react";

export default function NasaHeadline(props){

    return(
        <div>
            <h1>{props.title}</h1>
            <h4>{props.date}</h4>
        </div>
    );
};
