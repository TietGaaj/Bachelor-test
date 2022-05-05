import React from 'react';
import '../index.css';
import {Link} from './Link'

export interface IResponsiveNav{
    //mobilenav: boolean
    //color: string
    //backgroundColor: string
    //navItems: string[]
    

}

type NavProps = IResponsiveNav

export const ResponsiveNav = (props: NavProps) =>{

    return(
        <nav className="w-2/3 sm:w-full h-2/6 sm:mx-0 px-0 sm:px-0 bg-slate-500 sm:bg-gray-900 ">
           <p className='text-center sm:text-right text-green-700 text-4xl mx-6 sm:mx-0'>Fuck</p>

        </nav>
    )
}