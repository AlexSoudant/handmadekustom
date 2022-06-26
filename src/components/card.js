import React from "react";
import styled from "styled-components";
import tw from "twin.macro";


const CardContainer = styled.div`
${tw`  
flex justify-center m-5
`};

    div {
        ${tw`  
            flex 
            flex-col
            m-6 
            rounded-lg 
            shadow-lg 
            bg-white 
            max-w-sm 
            lg:height[12em] 
            lg:width[20em]
            width[10em]
        `};

        h5 {
            ${tw`  
                text-gray-900 sm:text-sm height[72px]
                lg:text-xl  leading-tight font-medium p-4
            `};
        }
    }
`;


export function Card(props) {
    return (
      <CardContainer>
          <div>
              <h5>{props.title}</h5>
              <img alt="gallery" className="rounded-b-lg" src={props.image} />
          </div>
      </CardContainer>

    );
  }