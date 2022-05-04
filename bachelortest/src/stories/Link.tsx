import React from 'react';
import {textsize} from './storytypes/types'
import '../index.css';

interface  LinkProps{
    url:string
    size:textsize
    color:string
    linkname: string
}

type props = LinkProps

export const Link = (props : props) => {
    const {url,size,color,linkname} = props
    return(
        <a 
        href={url}
        className={`${size}`}>
        {linkname}
        </a>
    )
}