import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../responsive";
import { Card } from "./card";
import { Carousel } from "./carousel";
import { Dot } from "./dot";

const CompentencesContainer = styled.div`
${tw`  
    flex
    flex-col
    padding-top[2em]
    padding-bottom[5em]
    justify-center
    align-items[center]
    background-color[rgb(250,250,250)]
    overflow-hidden
`};`;

const CompetencesTitle = styled.h1`
${tw`  
    flex-auto
    flex-col
    font-size[xx-large]
    text-align[center]
    font-style[oblique]
    font-bold
    padding-bottom[2em]
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
        max-width[70em]
`};
  }` 

  // faire des cartes de compétence
// https://www.randstad.fr/metiers/chaudronnier-fh/

const competencesTable = [
    {title :'Assemblage Matériaux', descr:'Lorem ipsum'}, 
    {title :'Analyse plans et schémas', descr:'Lorem ipsum'}, 
    {title :'Soudure Cuivre', descr:'Lorem ipsum'}, 
    {title :'Certifications', descr:'soudage arc (EN 111, EN 135, EN 141)'}, 
    {title :'Sensibilisation sécurité VB', descr:'industrie, risques machines.'}, 
    {title :'Usinage', descr:'Pièces Inox et plastique'}
];

export function Competences() {
  const items = competencesTable.map((competence, index) => {
    return <Card title={competence.title} descr={competence.descr} key={index}></Card>
  });
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  if(!isMobile) {
    return (
      <CompentencesContainer>
          <CompetencesTitle>Mes Compétences <Dot /></CompetencesTitle>
          <CardsContainer>
            {items}
          </CardsContainer>
      </CompentencesContainer>
    );
  } else { 
    return (
        <CompentencesContainer>
            <CompetencesTitle>Mes Compétences <Dot /></CompetencesTitle>
                <Carousel items={items}/>
        </CompentencesContainer>
      );
    }
  }