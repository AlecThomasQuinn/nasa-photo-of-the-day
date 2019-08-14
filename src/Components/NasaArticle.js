import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function NasaArticle(){
    const [imageURL, setImageURL] = useState('');
    //title
    //date
    //article

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=k9ZpiCFaAhQPdf9BdgFkumzsAKCp4bh6maFLZEaf&date=2013-03-14')
            .then(response => {
                console.log('api getted from NasaArticle:', response.data);

                const imgURL = response.data.url;
                setImageURL(imgURL);

                // can I do this without making the variable?

            })
    }, []);  // the empty array is to stop an unintentional 'denial-of-service' attack

    return(
        <article>
            <img src={imageURL}/>
            <h1>Title goes here</h1>
            <h4>Date goes here</h4>
            <p>Article data goes here</p>
        </article>
    );
};