import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function NasaArticle(){
    //image
    //title
    //date
    //article

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=k9ZpiCFaAhQPdf9BdgFkumzsAKCp4bh6maFLZEaf&date=2013-03-14')
            .then(response => {
                console.log(response.data);
            })
    }, []); 

    return(
        <article>
            <img />
            <h1>Title goes here</h1>
            <h4>Date goes here</h4>
            <p>Article data goes here</p>
        </article>
    );
};