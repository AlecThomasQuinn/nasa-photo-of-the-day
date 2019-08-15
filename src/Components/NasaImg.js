import React from "react";
import styled from 'styled-components';

// I actually styled this with in the App.css file.
// probably not wise to have multiple stylings in multiple places
// again, seems unweildy at scale but for the sake of the assignment
// this is fine

// deleted code in app.css
// using styled-components here for the sake of the exercise

const StyledNasaImg = styled.div`
    img{
        max-width: 500px;
    }

`;

export default function NasaImg(props){

    return(
        <StyledNasaImg>
            <img src={props.imageURL} />
        </StyledNasaImg>
        );
};