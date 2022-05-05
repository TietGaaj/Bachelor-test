import React from 'react';
import '../index.css';

export interface IResponsiveNav{
    mobilenav: boolean
    color: string
    backgroundColor: string
    navItems: string[]

}

type NavProps = IResponsiveNav

export const ResponsiveNav = (props: NavProps) =>{

    return(
        <nav className=''>

        </nav>
    )
}