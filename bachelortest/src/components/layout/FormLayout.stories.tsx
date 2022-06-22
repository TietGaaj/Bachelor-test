import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormLayout } from './FormLayout'





export default{
    title: 'Components/formLayout',
    Component: FormLayout,
    argTypes:{
       
    
   
    }
} as ComponentMeta<typeof FormLayout>

const Template: ComponentStory<typeof FormLayout> = (args) => <FormLayout {...args} />;



export const RequestForm = Template.bind({});
RequestForm.args ={
   color: '#00120B',
   bgcolor : '#D8E4FF'
    
   
}

