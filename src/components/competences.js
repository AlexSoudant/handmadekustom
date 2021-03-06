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
`};`;

const CompetencesTitle = styled.h1`
${tw`  
    flex-auto
    flex-col
    font-size[xx-large]
    text-align[center]
    font-style[oblique]
    font-bold
    sm:padding-bottom[2em]
    padding-bottom[1em]
`};

    div {
        font-size: 30px;
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
          <CompetencesTitle>Mes Compétences <Dot /></CompetencesTitle>
          <CardsContainer>
          {images.map((image, index) => {
               return <Card title={competencesTable[index].title} image={image} key={index}></Card>
          })}
          </CardsContainer>
      </CompentencesContainer>

    );
  }