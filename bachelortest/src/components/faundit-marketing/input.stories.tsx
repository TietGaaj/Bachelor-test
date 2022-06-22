import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input';
import { layoutstyle } from '../storytypes/expObj';
const aa = Object.keys(layoutstyle.sizing.width).map(el => el)
console.log(aa)



export default{
    title: 'Components/Input',
    Component: Input,
    argTypes:{
        size:{
            options:aa,
            control:'select',
           },
        type:{
            options:['password','text','date','email','image'],
            control:'select',
        }
    
   
    }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;



export const Date = Template.bind({});
Date.args ={
    rounded:true,
    fieldName:'Another story',
    size:layoutstyle.sizing.width.half,
    value:"Example",
    required: false,
    type : 'date'
   
}

export const Email = Template.bind({});
Email.args ={
    rounded:true,
    fieldName:'Another story',
    size:layoutstyle.sizing.width.half,
    value:"Example",
    required: false,
    type : 'email'
   
}

export const Text = Template.bind({});
Text.args = {
    rounded : false,
    fieldName: "Text Input",
    size:layoutstyle.sizing.width.full,
    value:'Primary example',
    required:true,
    type : 'text'
    
}