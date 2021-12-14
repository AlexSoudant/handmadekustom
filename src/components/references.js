import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ReferencesContainer = styled.div`{
    ${tw`  
        flex
        flex-col
        justify-center
        align-middle
        font-size[small]
    `};

    div {
        text-align: center;
    }
  }`   


export function References(props) {
    return (
      <ReferencesContainer>
        <div>Icon made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        <div>Welder Images made by <a href="https://pixabay.com/users/emirkrasnic-4132021/" title="Freepik">Emir Krasnić </a> from <a href="https://pixabay.com" title="pixabay">www.pixabay.com</a></div>
        <div>Black Metal Texture made by <a href="http://grungetextures.com/" title="grungetextures">grungetextures </a> from <a href="https://www.deviantart.com/grungetextures/art/Black-Metal-Texture-102430983" title="deviantart">www.deviantart.com</a></div>
      </ReferencesContainer>
    );
  }