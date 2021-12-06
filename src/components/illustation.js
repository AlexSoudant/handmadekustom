import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import image from '../images/welding-background.png';

const IllustrationContainer = styled.div`
  ${tw`
  `};
`;

const Image = styled.div`
  background-image: url(${image});
  min-height: 50em;  width: auto;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  `

const IllustrationText = styled.div`
  ${tw`
    position[absolute]
    left[30%]
    top[20%]
    `};

    h1 {
        ${tw`
        text-5xl
        font-bold
        text-gray-100
        m-5
        `};
    }

    h2 {
        ${tw`
        text-2xl
        font-bold
        text-gray-100
        m-5
        `};
    }
`;

export function Illustration() {
    return (
      <IllustrationContainer>
    <Image/>
    <IllustrationText>
            <h1>Atelier de Chaudronnerie</h1>
            <h2>Donnez forme à vos projets par l'accompagnement d'un professionnel.</h2>
    </IllustrationText>
      </IllustrationContainer>
    );
  }