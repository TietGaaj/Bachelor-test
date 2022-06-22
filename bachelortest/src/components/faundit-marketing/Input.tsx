// eslint-disable-next-line @typescript-eslint/no-unused-vars
import react from 'react';
import '../../index.css'
import {layoutstyle}  from '../storytypes/expObj';

interface InputStyle{
    rounded:boolean
    size : string
    fieldName:string
    required : boolean
    value:string
   
    type : string

}



type InputType = InputStyle 


export const Input = (props:InputType) =>{
    const{rounded,fieldName,required,value,size,type} = props
    const {full,third,fourth,half} = layoutstyle.sizing.width
    
   

    console.log(size)

    const sizewidth = (size: string) =>{
        switch(size){
            case "full":
                return full
            case "half" :
                return half 
            case "third":
                return third
            case "fourth":
                return fourth
        }
    }

    

    return(

              
              <div>
                <input
                  className={`py-2 px-3 shadow appearance-none border text-base sm:text-sm xl:text-xl text-left ${rounded ? 'rounded' : 'rounded-none' } ${sizewidth(size)}`}
                  type = {type}
                  value={value}
                  required={required}
                  placeholder={fieldName}
                  name={fieldName}
                 />
                </div>
              )
}