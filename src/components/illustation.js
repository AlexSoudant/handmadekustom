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
  width: auto;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${tw`    
    lg:min-height[50em]
    md:min-height[30em]
    min-height[20em]
    object-fit[fill]
    md:bg-fixed
    bg-scroll
  `};
  `

const IllustrationText = styled.div`
  ${tw`
    position[absolute]
    lg:left[30%]
    left[10%]
    top[15%]
    sm:top[20%]
    `};

    h1 {
        ${tw`
        lg:text-5xl
        text-xl
        font-bold
        text-gray-100
        m-5
        `};
    }

    h2 {
        ${tw`
        lg:text-2xl
        text-lg
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