import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import image from '../images/Black_Metal_Texture_by_GrungeTextures.png';
import { Dot } from "./dot";

const CreationsContainer = styled.span`{
    flex
    flex-col
    padding-top[2em]
    padding-bottom[5em]
    justify-center
    align-items[center]
  }` 

  const Image = styled.div`
  ${tw`  
    lg:min-height[70em]
    min-height[28em]
    overflow-scroll
  `};
  background-image: url(${image});
  width: auto;
  position: relative;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  `

  const Title = styled.div`
  position: relative;
  width: 100%;

  div {
    text-align: center;
    background-color:#111;
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
        {tip: "Usinage", title :'Polissage acier', descr:'Lipsum', url:'../images/realisations/image0.jpeg'}, 
        {tip: "Technique", title :'Découpe Acier', descr:'Lipsum', url:'../images/realisations/image1.jpeg'}, 
        {tip: "Technique", title :'Soudure Acier', descr:'Lipsum', url:'../images/realisations/image2.jpeg'}, 
        {tip: "Assemblage", title :'Assemblage', descr:'Lipsum', url:'../images/realisations/image3.jpeg'}, 
        {tip: "Outillage", title :'Outil', descr:'Lipsum', url:'../images/realisations/image4.jpeg'}, 
        {tip: "Assemblage", title :'Assemblage', descr:'Lipsum', url:'../images/realisations/image5.jpeg'}, 
        {tip: "Technique", title :'Soudure Acier', descr:'Lipsum', url:'../images/realisations/image6.jpeg'}, 
        {tip: "Technique", title :'Soudure Acier', descr:'Lipsum', url:'../images/realisations/image7.jpeg'}, 
        {tip: "Assemblage", title :'Assemblage', descr:'Lipsum', url:'../images/realisations/image8.jpeg'}, 
        {tip: "Outillage", title :'Outil', descr:'Lipsum', url:'../images/realisations/image9.jpeg'}, 
        {tip: "Assemblage", title :'Assemblage', descr:'Lipsum', url:'../images/realisations/image10.jpeg'}, 
        {tip: "Technique", title :'Soudure Acier', descr:'Lipsum', url:'../images/realisations/image11.jpeg'}, 
        {tip: "Technique", title :'Soudure Acier', descr:'Lipsum', url:'../images/realisations/image12.jpeg'}, 
        {tip: "Assemblage", title :'Assemblage', descr:'Lipsum', url:'../images/realisations/image13.jpeg'}, 
        {tip: "Technique", title :'Soudure Acier', descr:'Lipsum', url:'../images/realisations/image14.jpeg'}, 
        {tip: "Assemblage", title :'Assemblage', descr:'Lipsum', url:'../images/realisations/image15.jpeg'}, 
        {tip: "Assemblage", title :'Assemblage ', descr:'Lipsum', url:'../images/realisations/image16.jpeg'}, 
        {tip: "Technique", title :'Soudure Acier', descr:'Lipsum', url:'../images/realisations/image17.jpeg'}, 
        {tip: "Assemblage", title :'Assemblage', descr:'Lipsum', url:'../images/realisations/image18.jpeg'}, 
    ];

    const cache = {};

    function importAll(r) {
        r.keys().forEach((key) => (cache[key] = r(key)));
    }
    // Note from the docs -> Warning: The arguments passed to require.context must be literals!
    importAll(require.context("../images/realisations", false, /\.(png|jpe?g|svg)$/));

    const images = Object.entries(cache).map(module => module[1].default);

    return (
      <CreationsContainer>
          <Title> <div><h1>Mes Réalisations</h1> <Dot/></div></Title>
          <Image>
          <Gallery className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">

                <div className="flex flex-wrap -m-4">
                {images.map((image, index) => {
               return <div className="lg:w-1/3 sm:w-1/2 p-4" key={index}>
               <div className="flex relative h-80">
               <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={image} />
               <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
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