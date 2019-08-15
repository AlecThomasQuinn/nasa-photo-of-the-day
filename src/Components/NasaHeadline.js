import React from "react";
import styled from 'styled-components';

const StyledNasaImgHeadline = styled.div`
    h1{
        font-family: crimson text, serif;
        font-weight: bold;
        font-size: 80px;
        padding: 0 20px;
        width: 90%;
        margin: 0;
    }

`;

export default function NasaHeadline(props){

    return(
        <StyledNasaImgHeadline>
            <h1>{props.title}</h1>
        </StyledNasaImgHeadline>
    );
};
