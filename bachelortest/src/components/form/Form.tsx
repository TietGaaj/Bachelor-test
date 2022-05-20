import React from 'react';
import '../../index.css'
import {Button} from "../button/Button"
interface Formprops{
    children: React.ReactNode
    onSubmit():void

}
type IFormprops = Formprops
const Form = (props: IFormprops) =>{
    return(
    <form>
        {props.children}

    </form>
    )
}