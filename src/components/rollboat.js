import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import pdfIcon from '../images/PDF_32.png';
import myPDF from '../images/Rollboat.pdf';
import { Dot } from "./dot";

export function Rollboat() {
    const RollboatContainer = styled.div`
        ${tw`  
            flex
            flex-col
            m-5
            justify-center
            align-items[center]
            font-size[xx-large]
            text-align[center]
            font-style[oblique]
            font-bold
        `};

            a {
                text-decoration: underline;
                color: blue;
            }

            img {
                height: 64px;
            }
        `;



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

    return (
        <RollboatContainer>
          <Title><div><h1>Rollboat</h1> <Dot/></div></Title>
          {/* <Link to="/files/Rollboat.pdf" target="_blank" download>Download</Link> */}
          <a href={myPDF} download="Rollboat_Metalmaster.pdf"> Télécharger la brochure. </a>
          <img src={pdfIcon} alt="pdf icon"/>
        </RollboatContainer>
    )
}