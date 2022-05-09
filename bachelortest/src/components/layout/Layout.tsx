import React, { Children } from "react";
import '../../index.css'
interface Layoutprops{
    mainContainer? : boolean
    withHero?: boolean
    withNav? : boolean

}
type LayoytType = Layoutprops
export const Layout = (props:LayoytType) =>{


return(
    <div className='min-h-screen min-w-screen'>
        <div className='w-4/6 mx-auto md:mx-0 sm:mx-0'>
           

        </div>
    </div>
)

}