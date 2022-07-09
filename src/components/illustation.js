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
    lg:background-size[50em]
    lg:min-height[42em]
    background-color[black]
    md:min-height[42em]
    min-height[18em]
    object-fit[fill]
    md:bg-fixed
  `};
  `

export function Illustration() {
    return (
      <IllustrationContainer>
        <Image/>
      </IllustrationContainer>
    );
  }