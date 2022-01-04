import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import metalLogo from '../images/metal_master_logo.png';


const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
    margin-left[1em]
  `};
`;

const LogoText = styled.div`
  ${tw`
    lg:text-xl
    md:text-xl
    text-sm
    // font-bold
    // text-gray-100
    font-family["MyFontEngrave"]
    text-white
    m-5
    `};
`;

const Image = styled.div`
  width: auto;
  ${tw`h-16
  flex-auto display[flex] flex-direction[row] justify-center align-middle`};

  img {
    width: auto;
    height: 100%;
  }
`;

export function Logo() {
    return (
      <LogoContainer>
        <Image>
          <img src={metalLogo} alt="Metal Master Logo"/>
        </Image>
        <LogoText>Metal Master</LogoText>
      </LogoContainer>
    );
  }