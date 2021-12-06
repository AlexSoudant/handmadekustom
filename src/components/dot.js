import React from "react";
import styled from "styled-components";

const DotContainer = styled.span`{
    height: 10px;
    width: 10px;
    background-color: #bbb;
    display: inline-block;
    border-radius: 50%;
  }` 

  
export function Dot() {
    return (
      <DotContainer />
    );
  }