// eslint-disable-next-line @typescript-eslint/no-unused-vars
import react from 'react'
import '../../index.css'

interface InputStyle{
    rounded:boolean
    backGround : string
    textColor : string
    siZe : 'Full-width' | 'Half-Width' | '1/4-Width'

}

interface InputProps{
    fieldName:string
    required : boolean
    value:string

    onChange?: () => void
}

type InputType = InputStyle & InputProps


export const Input = (props:InputType) =>{
    const{rounded,backGround,textColor,fieldName,required,value,onChange,siZe} = props
    const backgroundColor : any = backGround
    const color : any = textColor

    const size = () =>{
        if(siZe === 'Full-width'){
            console.log('fill')
            return 'min-w-full';
        }
        else if(siZe === 'Half-Width'){
            console.log('half')
            return 'w-1/2';
        }
        else if(siZe === '1/4-Width'){
            console.log('fourth')
            return 'w-1/4';
        }

    }

    return(

              
              <div>
                <input
                  className={`text-base sm:text-sm xl:text-xl text-left  bg-[${backGround}] ${rounded ? 'rounded' : 'rounded-none' } ${size()}`}
                  style={{backgroundColor,color}}
                  value={value}
                  required={required}
                  placeholder={fieldName}
                  name={fieldName}
                  onChange={() => onChange}
                />
                </div>
              )
}