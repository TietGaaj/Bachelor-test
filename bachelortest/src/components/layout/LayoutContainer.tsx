import React from "react";
import '../../index.css'
interface Contprops{
   flexdir? : 'row'|'column '
   wrap? : 'No-wrap' | 'wrap'

}
type ContType = Contprops
export const LayoutContainer = (props:ContType) =>{
return(
    <div>
         <div className='flex flex-row w-full max-h-40 px-4 my-4 box-border'>
             <div className='aspect-square  mx-4 basis-2/6 bg-zinc-800'>
                 <p className='text-left text-lg md:text-base sm:text-sm'>Lost</p><br/>
                 <p className='text-center text-lg md:text-base sm:text-sm'>Lost iphone</p>
             </div>
             <div className='aspect-square mx-4 basis-2/6 bg-orange-600'>
                 <span><p className='text-center text-lg md:text-base sm:text-sm'>Where</p></span>
                 <span><p className='text-center text-lg md:text-base sm:text-sm'>Whiskey hotel</p></span>
             </div>
             <div className='aspect-square  mx-4 basis-2/6 bg-blue-600'>
                 <p className='text-center text-lg md:text-base sm:text-sm'>When</p><br/>
                 <p className='text-center text-lg md:text-base sm:text-sm'>Last Saturday</p>
             </div>
        </div>
        <div className='flex flex-col w-full h-15 px-4 my-4 box-border'>
        <div className='aspect-square  mx-4 basis-2/6 bg-zinc-800'>
            <p className='text-left text-lg md:text-base sm:text-sm'>Lost</p><br/>
            <p className='text-center text-lg md:text-base sm:text-sm'>Lost iphone</p>
        </div>
        <div className='aspect-square mx-4 basis-2/6 bg-orange-600'>
            <span><p className='text-center text-lg md:text-base sm:text-sm'>Where</p></span>
            <span><p className='text-center text-lg md:text-base sm:text-sm'>Whiskey hotel</p></span>
        </div>
        <div className='aspect-square  mx-4 basis-2/6 bg-blue-600'>
            <p className='text-center text-lg md:text-base sm:text-sm'>When</p><br/>
            <p className='text-center text-lg md:text-base sm:text-sm'>Last Saturday</p>
        </div>
   </div>
   </div>
        )

}