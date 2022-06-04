import '../../index.css'
import React from 'react';

interface labelprops {
    WhatFor : string
    labelcolor?: string
    font?:string

}

type labelType = labelprops 

export const Label=(props:labelType) =>{
    const{WhatFor,labelcolor,font} = props
    return(
        <label htmlFor={WhatFor} className={`${labelcolor} ${font}`}/>

    );

};