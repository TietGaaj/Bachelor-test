import React from 'react';
import '../index.css';

interface  LinkProps{
    url:string
    size:string
    color:string
    linkname: string
}

type props = LinkProps

export const Link = (props : props) => {
    const {url,size,color,linkname} = props
    return(
        <a 
        href={url}
        className={`${size} ${color}`}>
        {linkname}
        </a>
    )
}