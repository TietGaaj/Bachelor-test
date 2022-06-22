
import React, { ReactNode } from "react";
import '../../index.css'
import { Button } from "../button/Button";
import { Input } from "../faundit-marketing/Input";
interface formprops{
  
   color : string
   bgcolor : string

}


type formtype = formprops

export const FormLayout = (props: formtype) => {

return(
<div className="sm:min-h-full sm:min-w-full md:min-h-full md:min-w-full lg:min-h-full lg:w-1/2 lg:mx-auto" style={{color:`${props.color}`, backgroundColor:`${props.bgcolor}`}}>
   <form>
      <div className="min-w-full">
      <h2>Your contact information</h2>
      <Input rounded={false} size={"full"} fieldName={"Name"} required={true} value={""} type={"text"}/>
      </div>
      <div className="flex flex-row py-4 ">
         <div className="basis-1/2">
            <Input rounded={false} size={"third"} fieldName={"Your email"} required={true} value={""} type={"email"}/>
         </div>
         <div className=" basis-1/2">
            <Input rounded={false} size={"third"} fieldName={"Your email"} required={true} value={""} type={"text"}/>
         </div>
         </div>
         <h2>What did you forget</h2>
         <div className="flex flex-row py-4">
            <div className="basis-2/3">
               <Input rounded={false} size={"full"} fieldName={"Describe item"} required={true} value={""} type={"text"}/>
            </div>
            <div className="px-4 basis-1/3">
               <Input rounded={false} size={"fourth"} fieldName={"Image"} required={true} value={""} type={"text"}/>
            </div>
         </div>
         <p>ex. MacBook Pro (silver, 13”), Long red jacket, iPhone charger (white)</p>
         <div className="flex flex-row">
            <div className='w-1/3'>
            <Input rounded={false} size={"third"} fieldName={"Reservation number"} required={true} value={""} type={"text"}/>
         </div>
         </div>
         <div className="flex flex-row">
            <div className='w-1/3'>
            <Input rounded={false} size={"full"} fieldName={"Where"} required={true} value={""} type={"text"}/>
            
         </div>
         <p>(ex. Room number, license plate, other ...)</p>
         </div>

         <div className="min-w-full mx-auto">
            <Button color={props.bgcolor} backgroundColor={props.color} label={"Send Request"} sizingheight={"h-3/4"} sizingwidth={"w-3/4"} fontfami={"font-sans"}/>
         </div>

      
      
   </form>

</div>)







}