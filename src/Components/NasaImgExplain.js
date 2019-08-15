import React from "react";
import styled from 'styled-components';

const StyledNasaImgExplain = styled.div`
    p{
        font-family: crimson text, serif;
        font-size: 22px;
        font-weight: semi-bold;
        padding-left: 20px;
        width: 90%;
        margin: 0;
    }

`;

export default function NasaImgExplain(props){

    return(
        <StyledNasaImgExplain>
            <p>{props.imgExplain}</p>
        </StyledNasaImgExplain>
    );
};