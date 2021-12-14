import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import image from '../images/welding-me.png';


const MeContainer = styled.div`
${tw`  
    flex
    flex-col
    m-5
    justify-center
    align-items[center]
`};`;

const Title = styled.div`
${tw`  
    flex
    flex-auto
    flex-row
    font-size[xx-large]
    text-align[center]
    font-style[oblique]
    font-bold
`};

    h1 {
        ${tw`  
        flex
        flex-auto
        flex-row
        font-size[xx-large]
        text-align[center]
        font-style[oblique]
        font-bold
        align-self[center]
    `};
    }

    div {
        font-size: 2em;
        color: #bbb;*
        ${tw`  
        flex
        flex-auto
    `};
    }
`;

const ContentContainer = styled.div`
${tw`  
    flex
    flex-col
    md:flex-row
    m-5
    justify-center
    align-items[center]
`};`;


const DescriptionText = styled.div`
${tw`  
    flex
    flex-col
    m-16
    justify-center
    align-items[center]
    max-width[23em]
    lg:font-size[x-large]
    font-size[small]
    text-align[justify]
`};`;

const Image = styled.div`
    ${tw`
        lg:width[50em]
        width[20em]
    `};
    img {
        ${tw`  
        shadow-2xl rounded max-w-full h-auto align-middle border-none
    `};
    }

`;

export function Me() {
    return (
      <MeContainer>
          <Title><h1>Qui Suis-Je </h1> <div> ?</div></Title>
          <ContentContainer>
              <DescriptionText>Bonjour ! Je m'appelle Romain Blanchard. J'ai pour passion de transformer les matériaux bruts en créations originales. Mon métier de chaudronnier m'a amené à travailler avec de nombreux clients qui m'ont fait grandir professionnellement à travers des chantiers toujours plus ambitieux. J'ai aujourd'hui 20 ans d'expérience dans les domaines de la construction navale et des travaux maritimes. Désormais auto-entrepreneur, je souhaite accompagner vos projets pour tous travaux dans l'assemblage de matériaux.</DescriptionText>
              <Image><img src={image} alt="me welding"/></Image>
          </ContentContainer>
      </MeContainer>
    );
  }

