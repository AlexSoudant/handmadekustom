import {
  faChevronUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const FooterContainer = styled.div`
  ${tw`
    w-full
    min-height[5em]
    flex
    flex-row
    items-center
    lg:pl-12
    lg:pr-12
    justify-center
    bg-gradient-to-r from-[#FE27FF] via-[#270DF4] to-black
    text-gray-100
    font-bold
    font-size[larger]
  `};
`;


export function Footer() {
  const scrollToTopPage = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 0)
  };
  
    return (
      <FooterContainer>
        <button onClick={scrollToTopPage} onKeyUp={scrollToTopPage} tabIndex="0">
          <FontAwesomeIcon icon={faChevronUp} size="3x" />
        </button>
      </FooterContainer>
    );
  }

