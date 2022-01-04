import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Dot } from "./dot";

const ContactContainer = styled.div`
    ${tw`  
        flex
        flex-col
        padding-top[2em]
        padding-bottom[5em]
        justify-center
        align-items[center]
    `};
`;

const Title = styled.h1`
    ${tw`  
        flex-auto
        flex-col
        font-size[xx-large]
        text-align[center]
        font-style[oblique]
        font-bold
        padding-bottom[2em]
    `};
`

const Information = styled.h1`
    ${tw`  
        flex-auto
        flex-col
        lg:font-size[x-large]
        font-size[large]
        text-align[center]
        font-style[oblique]
        padding-bottom[2em]
    `};
`

export function Contact() {
    return (
      <ContactContainer>
          <Title>Contact <Dot /></Title>
          <Information>Romain Blanchard</Information>
          <Information>metalmaster.rb@gmail.com</Information>
          <Information>Tél : 06 xx xx xx xx</Information>
      </ContactContainer>
    );
  }