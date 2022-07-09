import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import metalLogo from '../images/metal_master_logo_alt.jpeg';

const IllustrationContainer = styled.div`
  ${tw`
  `};
`;

const Image = styled.div`
  background-image: url(${metalLogo});

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position-x: center;
  ${tw`  
    background-position-y[top]  
    md:background-position-y[top]
    lg:background-size[65em]
    xl:background-size[75em]
    lg:min-height[65em]
    background-color[black]
    md:min-height[42em]
    min-height[18em]
    object-fit[fill]
    md:bg-fixed
  `};
  `

// const IllustrationText = styled.div`
//   ${tw`
//     position[absolute]
//     lg:left[30%]
//     left[10%]
//     top[15%]
//     sm:top[20%]
//     `};

//     h1 {
//         ${tw`
//         lg:text-5xl
//         text-xl
//         font-bold
//         text-gray-100
//         m-5
//         `};
//     }

//     h2 {
//         ${tw`
//         lg:text-2xl
//         text-lg
//         font-bold
//         text-gray-100
//         m-5
//         `};
//     }
// `;

export function Illustration() {
    return (
      <IllustrationContainer>
    <Image/>
    {/* <IllustrationText>
            <h1>Atelier de Chaudronnerie</h1>
            <h2>Donnez forme à vos projets par l'accompagnement d'un professionnel.</h2>
    </IllustrationText> */}
      </IllustrationContainer>
    );
  }