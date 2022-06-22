import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LayoutContainer } from './LayoutContainer';





export default{
    title: 'Components/Layouttest',
    Component: LayoutContainer,
   
} as ComponentMeta<typeof LayoutContainer>

const Template: ComponentStory<typeof LayoutContainer> = (args) => <LayoutContainer {...args} />;



export const Test = Template.bind({});
Test.args ={
   
   
}

