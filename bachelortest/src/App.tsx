import React from 'react';

import './index.css';
import { Button } from './components/button/Button'
import {ResponsiveNav} from "./components/nav/ResponsiveNav"

function App() {
  return (

   <div>
     <ResponsiveNav/>

    

      <p>Hej</p>
      <Button
  backgroundColor="#b16565"
  color="#0a0dff"
  fontfami="font-serif"
  label="Button"
  onClick={() => {}}
  sizingheight="h-3/4"
  sizingwidth="w-3/4"
/>
</div>
     
   
   
  )
}

    
  

export default App;
