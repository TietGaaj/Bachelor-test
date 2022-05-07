import React from 'react';
import { sh , sw, fontfam } from "../storytypes/types";
import '../../index.css'

interface ButtonProps{
 color : string
 backgroundColor: string
 label: string
 sizingheight: sh
 sizingwidth: sw
 fontfami: fontfam

  
  onClick?: () => void;
}

type IButton = ButtonProps

export const Button = (props:IButton) => {
  const{color,backgroundColor,label,sizingheight,sizingwidth,fontfami} = props
  return (
   <button
   className={`${sizingheight} ${sizingwidth} ${fontfami}`}
   style={{color,backgroundColor}}>
     {label}
   </button>
    
     
    
  );
};
