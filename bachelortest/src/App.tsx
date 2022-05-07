import React from 'react';

import './index.css';

import {ResponsiveNav} from "./components/nav/ResponsiveNav"
import {Layout} from "././components/layout/Layout"
import {LayoutContainer} from "././components/layout/LayoutContainer"

function App() {
  return (

     <div className='min-w-full'>
     <ResponsiveNav/>
     <LayoutContainer/>
     </div>
     
   
   
  )
}

    
  

export default App;
