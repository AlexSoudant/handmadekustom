import React from "react";
import styled from "styled-components";
import tw from "twin.macro";


const CardContainer = styled.div`
${tw`  
flex justify-center m-5
`};

    div {
        ${tw`  
            block 
            p-6 
            rounded-lg 
            shadow-lg 
            bg-white 
            max-w-sm 
            height[10em] 
            width[10em]
            lg:height[12em] 
            lg:width[20em]
        `};

        h5 {
            ${tw`  
                text-gray-900 text-xl leading-tight font-medium mb-2
            `};
        }

        p {
            ${tw`  
                text-gray-700 text-base mb-4
            `};
        }
    }
`;


export function Card(props) {
    return (
      <CardContainer>
          <div>
              <h5>{props.title}</h5>
              <p>{props.descr}</p>
          </div>
      </CardContainer>

    );
  }