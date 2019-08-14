import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function NasaArticle(){
    const [imageURL, setImageURL] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('2019-08-14');
    const [imgExplain, setImgExplain] = useState('');

    //title
    //date
    //article

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=k9ZpiCFaAhQPdf9BdgFkumzsAKCp4bh6maFLZEaf&date=${date}`)
            .then(response => {
                console.log('api getted from NasaArticle:', response.data);

                const imgURL = response.data.url;
                setImageURL(imgURL);

                // can I do this without making the variable?
                setTitle(response.data.title)
                // Yes. Yes I can.
                setDate(response.data.date);
                setImgExplain(response.data.explanation);

            })
    }, []);  // the empty array is to stop an unintentional 'denial-of-service' attack

    return(
        <article>
            <img src={imageURL}/>
            <h1>{title}</h1>
            <h4>{date}</h4>
            <p>{imgExplain}</p>
        </article>
    );
};