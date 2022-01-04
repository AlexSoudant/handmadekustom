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
  opacity: 0.35;
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
    return (
      <CreationsContainer>
          <Title> <div><h1>Mes Réalisations</h1> <Dot/></div></Title>
          <Image>
          <Gallery className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">

                <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="flex relative h-80">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360" />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Charpente en Acier</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Chantier à Saint-Herblain 2019.</h1>
                        <p className="leading-relaxed">Photo prise pendant la mise en place de la charpente.</p>
                    </div>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="flex relative h-80">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"/>
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Etagère Aviateur</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Création personnelle de 2018.</h1>
                        <p className="leading-relaxed">Etagère entièrement inox en forme d'aile d'avion. Poids moyen : 10kg.</p>
                    </div>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="flex relative h-80">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"/>
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Lorem ipsum</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Lorem ipsum dolor sit amet.</h1>
                        <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="flex relative h-80">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"/>
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Lorem ipsum</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Lorem ipsum dolor sit amet.</h1>
                        <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="flex relative h-80">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"/>
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Lorem ipsum</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Lorem ipsum dolor sit amet.</h1>
                        <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="flex relative h-80">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"/>
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Lorem ipsum</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Lorem ipsum dolor sit amet.</h1>
                        <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </Gallery>
          </Image>
      </CreationsContainer>
    );
  }