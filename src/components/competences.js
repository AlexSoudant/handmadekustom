import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Card } from "./card";
import { Dot } from "./dot";


const CompentencesContainer = styled.div`
${tw`  
    flex
    flex-col
    padding-top[2em]
    padding-bottom[5em]
    justify-start
    align-items[center]
    background-color[rgb(250,250,250)]
    height[20em]
    sm:height[auto]
    overflow-x-hidden
    font-size[xx-large]
    text-align[center]
    font-style[oblique]
    font-bold
`};`;

const Title = styled.div`
  position: relative;
  width: 100%;

  div {
    text-align: center;
    ${tw`  
        h-16
        display[flex]
        justify-center
        font-size[xx-large]
        text-align[center]
        font-style[oblique]
    `};

    h1 {
      align-self: center;
    }

    span {
      align-self: center;
      margin-top: 0.5em;
      margin-left: 0.25em;
    }
  }
`;



  const CardsContainer = styled.div`{
    ${tw`  
        flex
        flex-row
        flex-wrap
        justify-center
        align-middle
`};
  }` 

  // faire des cartes de compétence
// https://www.randstad.fr/metiers/chaudronnier-fh/

const competencesTable = [
    {title :'Tig Acier Inox Alu'}, 
    {title :'Usinage'}, 
    {title :'Roulage'},
    {title :'conception / dessin'},
];

const cache = {};

function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
}
// Note from the docs -> Warning: The arguments passed to require.context must be literals!
importAll(require.context("../images/competences", false, /\.(png|jpe?g|svg)$/));

const images = Object.entries(cache).map(module => module[1].default);

export function Competences() {
    return (
      <CompentencesContainer>
          <Title><div><h1>Mes Compétences</h1> <Dot/></div></Title>
          <CardsContainer>
          {images.map((image, index) => {
               return <Card title={competencesTable[index].title} image={image} key={index}></Card>
          })}
          </CardsContainer>
      </CompentencesContainer>

    );
  }