import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import image from "../images/image_fond_creation.jpeg";
import { Categories } from "./categories";
import { Dot } from "./dot";

const CreationsContainer = styled.span`{
    flex
    flex-col
    padding-top[2em]
    padding-bottom[5em]
    justify-center
    align-items[center]
  }`;

const Image = styled.div`
  ${tw`  
    lg:min-height[70em]
    min-height[28em]
    overflow-scroll
  `};
  background-image: url(${image});
  width: auto;
  position: relative;
  overflow-x: hidden;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.div`
  position: relative;
  width: 100%;

  div {
    text-align: center;
    background-color: #111;
    color: #fff;
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

const Gallery = styled.div`
  position: absolute;
  width: 100%;
  top: 0%;
`;
  
export function Creations() {
    const creationsParams = [{title:"Particuliers"}, {title:"Industrie"}, {title:"Travaux public"}]
    const creationsTable = [
      [
        {tip: "Assemblage", title :'Fabrication', descr:'Jardinière en acier corten.'}, 
        {tip: "Assemblage", title :'Fabrication', descr:'Portillon de jardin.'}, 
        {tip: "Technique", title :'Soudure', descr:'Lipsum'}, 
        {tip: "Assemblage", title :'Fabrication', descr:'Rambarde amovible.'}, 
        {tip: "Réparation", title :'Réservoir', descr:'Réparation d’un réservoir d’avion en aluminium.'},
        {tip: "Assemblage", title :'Réalisation', descr:'Réalisation d’un renfort sur mesure en aluminium de 10 mm d’épaisseur pour rigidifier et rallonger un mat de voilier.'},  
        {tip: "Assemblage", title :'Fabrication', descr:'Découpe laser sur tôle en corten à l’effigie de la mascotte de l’île de ré.'}, 
        {tip: "Assemblage", title :'Réalisation', descr:'Formage d’un renfort de mat en aluminium.'}, 
      ], 
      [
        {tip: "Technique", title :'Découpe', descr:'Plaque Acier'}, 
        {tip: "Assemblage", title :'Fabrication', descr:'Chariot de dévidage en acier galvanisé et aluminium.'}, 
        {tip: "Assemblage", title :'Fabrication', descr:'Plateforme d\'accès.'}, 
        {tip: "Assemblage", title :'Fabrication', descr:'Escalier d\'accès de 5m50 de hauteur pour une cuve à acide.'}, 
        {tip: "Assemblage", title :'Fabrication', descr:'Garde main.'}, 
        {tip: "Technique", title :'Rivets', descr:'Lipsum'}, 
        {tip: "Outillage", title :'Fabrication', descr:'Outillage permettant la fabrication d\'un faisceau électrique de bus.'}, 
        {tip: "Outillage", title :'Fabrication', descr:'Plateformes mobiles et fixes pour Heuliez bus.'}, 
        {tip: "Divers", title: "Fabrication", descr: "Pièce divers acier." },
        {tip: "Réparation", title: "Réservoir", descr: "réservoir en aluminium." },
        {tip: "Assemblage", title :'Soudure', descr:'Tig Acier Inox Alu.'}, 
        {tip: "Assemblage", title :'Soudure', descr:'Tig Acier Inox Alu.'}, 
        {tip: "Assemblage", title :'Soudure', descr:'Tig Acier Inox Alu.'}, 
        {tip: "Assemblage", title :'Réalisation', descr:'Gabarit de positionnement de vitrage dans le ferroviaire.'},
        {tip: "Assemblage", title :'Réalisation', descr:'Prototype pour l\'industrie ferroviaire.'},  
        {tip: "Assemblage", title :'Fabrication', descr:'Escalier acier galvanisé.'}, 
        {tip: "Assemblage", title :'Fabrication', descr:'Escalier acier galvanisé.'},
        {tip: "Assemblage", title :'Réalisation', descr:'Gabarit de positionnement en aluminium.'},  
      ],
      [
        {tip: "Outillage", title :'Mesure ', descr:'Laser.'}, 
        {tip: "Technique", title :'Soudure', descr:'Rechargement de pièce d\'usure avec du fil chargé à la poussière de tungstène.'}, 
        {tip: "Technique", title :'Réparation', descr:'Redressage de godet et remplacement de la lame en acier dur.'}, 
        {tip: "Outillage", title :'Mesure ', descr:'Laser.'}, 
        {tip: "Technique", title :'Réparation', descr:'Troisième étape de réparation d\'une cuve.'}, 
        {tip: "Technique", title :'Réparation', descr:'Première étape de réparation d\'une cuve.'},
        {tip: "Technique", title :'Réparation', descr:'Seconde étape de réparation d\'une cuve.'}, 
        {tip: "Technique", title :'Réparation', descr:'Remplacement de dents sur fraise de type foreuse.'}, 
      ]
    ];

    let cache = {};
    let images = [];

    function importAll(r) {
        r.keys().forEach((key) => (cache[key] = r(key)));
    }

    function importImages() {
        cache = {};
        importAll(
          require.context("../images/realisations/particuliers", false, /\.(png|jpe?g|svg)$/),
        );
        images.push(Object.entries(cache).map((module) => module[1].default));

        cache = {};
        importAll(
          require.context("../images/realisations/industrie", false, /\.(png|jpe?g|svg)$/),
        );
        images.push(Object.entries(cache).map((module) => module[1].default));

        cache = {};
        importAll(
          require.context("../images/realisations/travauxPublic", false, /\.(png|jpe?g|svg)$/),
        );
        images.push(Object.entries(cache).map((module) => module[1].default));
    }

    importImages();

    return (
      <CreationsContainer>
          <Title> <div><h1>Réalisations</h1> <Dot/></div></Title>
          <Image>
          <Gallery className="text-white body-font">
            <div className="container px-5 py-2 mx-auto">
            {creationsParams.map((params, index) => { 
              return <Categories title={params.title} creations={creationsTable[index]} images={images[index]} key={index}></Categories>
          })}
        </div>
      </Gallery>
    </Image>
  </CreationsContainer>  
  );
}
