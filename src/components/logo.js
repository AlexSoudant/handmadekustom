import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import welderImg from '../images/welder.png';


const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
  `};
`;

const LogoText = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-gray-100
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
          <img src={welderImg} alt="Kustom Made Logo"/>
        </Image>
        <LogoText>Handmade Kustom</LogoText>
      </LogoContainer>
    );
  }