import React from "react";
import styled from 'styled-components';


// when importing fonts using styled components you import 
// directly into the component (lines 15-17)
// seems unweildy at scale but mayber there is a better way idk about yet
//   ^
//   |
//   |
// WRONG
// You still link into the index.html, it is in the public folder

const NasaTimesStyled = styled.div`
    // @import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Crimson+Text&display=swap');
    // font-size: 22px;
    // background-color: crimson; 

    // these comments do work, it only looks like it doesn't because
    // the colors are not changing as usual on VSCode

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