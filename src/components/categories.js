import React from "react";
import styled from "styled-components";

const CategoriesContainer = styled.span`{
    flex
    flex-col
    padding-top[2em]
    padding-bottom[2em]
    justify-center
    align-items[center]
  }`;

  const titleStyle = {
    "fontSize":"x-large",
};

  export function Categories(props) {

    return (
      <CategoriesContainer>
        <h1 className="flex flex-wrap my-8 justify-center" style={titleStyle}>{props.title}</h1>
        <div className="flex flex-wrap -m-4">
                {props.images.map((image, index) => {
               return <div className="md:w-1/3 w-full p-4" key={index}>
               <div className="flex relative h-80">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={image} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80">
                   <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{props.creations[index].tip}</h2>
                   <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{props.creations[index].title}</h1>
                   <p className="leading-relaxed text-black">{props.creations[index].descr}</p>
               </div>
               </div>
           </div>
          })}
        </div>
      </CategoriesContainer>)
  }

