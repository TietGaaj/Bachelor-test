import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input';



export default{
    title: 'Components/Input',
    Component: Input,
    argTypes:{
        siZe:{
            control:'select',
            options: ['Full-width', 'Half-Width', '1/4-Width']
        },
        backGround:{
            control:"color"
        },
        textColor:{
            control:"color"
        },
    docs:{description:{ component: 'Text input - Use both in Faundit Marketing and Faundit App'},}
    }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;


export const Primary = Template.bind({});
Primary.args = {
    rounded : false,
    fieldName: "Google",
    backGround:"faunditprime",
    textColor:'text-black',
    siZe:"Half-Width",
    value:'Something',
    required:false
}
export const Secondary = Template.bind({});
Secondary.args ={
    rounded:true,
    fieldName:'Email',
    backGround:'bg-orange-400',
    textColor:'text-bg-cyan-400',
    siZe:"Full-width",
    value:"Something else",
    required: true
}