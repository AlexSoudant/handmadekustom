import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import image from "../images/image_fond_creation.jpeg";
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
    const creationsTable = [
        {tip: "Assemblage", title :'Fabrication', descr:'Jardinière en acier corten.'}, 
        {tip: "Technique", title :'Découpe', descr:'Plaque Acier'}, 
        {tip: "Assemblage", title :'Soudure', descr:'Tig Acier Inox Alu.'}, 
        {tip: "Assemblage", title :'Soudure', descr:'Tig Acier Inox Alu.'}, 
        {tip: "Assemblage", title :'Fabrication', descr:'Chariot de dévidage en acier galvanisé et aluminium.'}, 
        {tip: "Assemblage", title :'Soudure', descr:'Tig Acier Inox Alu.'}, 
        {tip: "Assemblage", title :'Fabrication', descr:'Plateforme d\'accès.'}, 
        {tip: "Assemblage", title :'Fabrication', descr:'Escalier d\'accès de 5m50 de hauteur pour une cuve à acide.'}, 
        {tip: "Technique", title :'Soudure', descr:'Lipsum'}, 
        {tip: "Assemblage", title :'Fabrication', descr:'Garde main.'}, 
        {tip: "Assemblage", title :'Fabrication', descr:'Rambarde amovible.'}, 
        {tip: "Technique", title :'Rivets', descr:'Lipsum'}, 
        {tip: "Outillage", title :'Mesure ', descr:'Laser.'}, 
        {tip: "Technique", title :'Soudure', descr:'Rechargement de pièce d\'usure avec du fil chargé à la poussière de tungstène.'}, 
        {tip: "Technique", title :'Réparation', descr:'Redressage de godet et remplacement de la lame en acier dur.'}, 
        {tip: "Outillage", title :'Fabrication', descr:'Outillage permettant la fabrication d\'un faisceau électrique de bus.'}, 
        {tip: "Outillage", title :'Mesure ', descr:'Laser.'}, 
        {tip: "Outillage", title :'Fabrication', descr:'Plateformes mobiles et fixes pour Heuliez bus.'}, 
        {tip: "Technique", title :'Réparation', descr:'Première étape de réparation d\'une cuve.'},
        {tip: "Technique", title :'Réparation', descr:'Seconde étape de réparation d\'une cuve.'}, 
        {tip: "Technique", title :'Réparation', descr:'Troisième étape de réparation d\'une cuve.'}, 
        {tip: "Divers", title: "Fabrication", descr: "Pièce divers acier." },
        {tip: "Réparation", title: "Réservoir", descr: "réservoir en aluminium." },
        {tip: "Assemblage", title :'Fabrication', descr:'Portillon de jardin.'}, 
        {tip: "Technique", title :'Réparation', descr:'Remplacement de dents sur fraise de type foreuse.'}, 
    ];

    const cache = {};

    function importAll(r) {
        r.keys().forEach((key) => (cache[key] = r(key)));
    }


  importAll(
    require.context("../images/realisations", false, /\.(png|jpe?g|svg)$/)
  );

  const images = Object.entries(cache).map((module) => module[1].default);

    return (
      <CreationsContainer>
          <Title> <div><h1>Réalisations</h1> <Dot/></div></Title>
          <Image>
          <Gallery className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">

                <div className="flex flex-wrap -m-4">
                {images.map((image, index) => {
               return <div className="md:w-1/3 w-full p-4" key={index}>
               <div className="flex relative h-80">
               <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={image} />
               <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80">
                   <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{creationsTable[index].tip}</h2>
                   <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{creationsTable[index].title}</h1>
                   <p className="leading-relaxed">{creationsTable[index].descr}</p>
               </div>
               </div>
           </div>
          })}
          </div>
        </div>
      </Gallery>
    </Image>
  </CreationsContainer>  
  );
}
