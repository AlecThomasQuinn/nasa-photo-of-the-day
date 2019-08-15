import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';

import NasaHeadline from './NasaHeadline';
import NasaImgExplain from "./NasaImgExplain"; //you can tell it's an auto-import by it's use of doubles "" instead of singles ''
import NasaImg from "./NasaImg";
import NasaTimesHeader from "./NasaTimesHeader";

const FlexWrap = styled.div`
    display: inline-flex;
    justify-content: space-between;
    width: 100%;

`;

export default function NasaArticle(){
    const [imageURL, setImageURL] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('2019-08-14');
    const [imgExplain, setImgExplain] = useState('');

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
            {/* <img src={imageURL}/>
            <h1>{title}</h1>
            <h4>{date}</h4>
            <p>{imgExplain}</p> */}

            <NasaTimesHeader date={date} />
            <FlexWrap>
                <NasaHeadline title={title} />
                <NasaImg imageURL={imageURL} />
                <NasaImgExplain imgExplain={imgExplain}/>
            </FlexWrap>
            

        </article>
    );
};

// I am passing no props and want to practice that so I am 
// going to make each tag a component that takes props to pass 
// title, date etc from NasaArticle

// that was easier than I thought it would be, I am glad I had all those
// notes in lambda-calculator
