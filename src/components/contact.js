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
        font-size[xx-large]
        text-align[center]
        font-style[oblique]
        font-bold
    `};
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

const Information = styled.h2`
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
          <Title><div><h1>Contact</h1> <Dot/></div></Title>
          <Information>Romain Blanchard</Information>
          <Information>metalmaster.rb@gmail.com</Information>
          <Information>Tél : 07 456 226 15</Information>
      </ContactContainer>
    );
  }