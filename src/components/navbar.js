import * as React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from '../components/logo';

const NavbarContainer = styled.div`
  ${tw`
    position[sticky]
    top[0]
    w-full
    min-height[5em]
    flex
    flex-row
    items-center
    lg:pl-12
    lg:pr-12
    justify-between
    bg-gradient-to-r from-blue-400 via-red-500 to-gray-900
    text-gray-100
    font-bold
    font-size[larger]
    z-20
  `};
`;

const LogoContainer = styled.div`
${tw`  
    h-full
    flex-initial
    display[flex]
    min-height[5em]
`};`;

const MenuContainer = styled.div`
${tw`  flex flex-col sm:flex-row
`};`;

export function Navbar() {
  const buttonLabelsTable = ["Accueil", "Compétences", "Qui Suis-Je", "Réalisations", "Contact"];

  const scrollToSection = (index) => {
    const sectionScrollPosition = [0, 800, 1500, 2200, 5000]
    setTimeout(() => {
      window.scrollTo({ top: sectionScrollPosition[index], behavior: 'smooth' })
    }, 0)
  };

  
  return (
    <NavbarContainer>
        <LogoContainer>
            <Logo />
        </LogoContainer>
    <MenuContainer>
      {buttonLabelsTable.map((label, index) => {
        return  <button onClick={() => scrollToSection(index)} key={index}
        className="
          #fff
          py-4
          px-6
          block
          hover:text-purple-500
          focus:outline-none
          text-white
          font-medium
        "
      >
        {label}
      </button>
     })
    }
    </MenuContainer>

    </NavbarContainer>
  );
}
