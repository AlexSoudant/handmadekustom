import * as React from "react";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../responsive";
import menuStyles from "../styles/menuStyles";

const NavbarContainer = styled.div`
  

  font-family: 'MyFontEngrave';


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
    // bg-gradient-to-r from-[#FE27FF] via-[#270DF4] to-black
    background-color[black]
    font-size[larger]
    z-20
    md:min-height[1em]
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
${tw`  flex flex-col md:flex-row
`};`;

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `};
`;

const NavItem = styled.div`
      ${tw`
      flex
      text-white
      text-xl
      mb-3
      focus:text-white
      md:mr-5
      cursor-pointer
      transition
      duration-300
      ease-in-out
    `};
`;

export function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const isTablet = useMediaQuery({ maxWidth: SCREENS.md });

  const buttonLabelsTable = ["Accueil", "Compétences", "Qui Suis-Je", "Réalisations", "Contact"];

  const scrollToSection = (index) => {
    let sectionScrollPosition = [0, 800, 1500, 2200, 5000];
    
    if (isMobile) {
      sectionScrollPosition = [0, 320, 650, 1450, 5000]
    } else if (isTablet) {
      sectionScrollPosition = [0, 500, 1100, 1625, 5000]
    }

    setTimeout(() => {
      window.scrollTo({ top: sectionScrollPosition[index], behavior: 'smooth' })
    }, 0)
  };

  if (isTablet) {
    return (
      <NavbarContainer>
          <LogoContainer>
              {/* <Logo /> */}
          </LogoContainer>
      <MenuContainer>
        <Menu right styles={menuStyles}>
          <ListContainer>
            {buttonLabelsTable.map((label, index) => {
                return  <NavItem menu>
                  <button onClick={() => scrollToSection(index)} key={index}>
                {label}
              </button>
            </NavItem>
            })
            }
          </ListContainer> 
        </Menu>
      </MenuContainer>
      </NavbarContainer>
    );
  } else {
    return (
      <NavbarContainer>
          <LogoContainer>
              {/* <Logo /> */}
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
}
