import React from "react";
import styled from 'styled-components';

const NasaTimesStyled = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Crimson+Text&display=swap');
    font-size: 22px;
    background-color: crimson;

    h1{
        font-size: 77px;
        font-family: Abril Fatface, cursive;
        border-bottom: 2px solid black;
        margin: 0;
        padding: 0;
    }

    h4{
        font-size: 44px;
        font-family: Crimson Text, serif;
        border-bottom: 2px solid black;
        margin: 0 0 44px 0;
        padding: 0;
    }
`;

export default function NasaTimesHeader(props){

    return(
        <NasaTimesStyled>
            <h1>NASA Times</h1>
            <h4>{props.date}</h4>
        </NasaTimesStyled>
    );
};