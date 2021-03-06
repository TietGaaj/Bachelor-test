import React from 'react';
import '../../index.css'
import {textsize} from '../storytypes/types'

export interface LinkProps{
    url:string
    size:textsize
    color:string
    linkname: string
    underline: boolean
}

type props = LinkProps

export const Link = (props : props) => {
    const {url,size,color,linkname, underline} = props
   
    return(
        <a 
        href={url}
        className={`${size} ${underline ? "underline":"no-underline"}`}
        style={{color}}
        >
        {linkname}
        </a>
    )
}