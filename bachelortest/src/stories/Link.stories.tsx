import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import { Link } from './Link';

export default{
    title: 'Link',
    Component: Link,
    argTypes:{
        size:{
            control:'select',
            options: ["text-sm","text-base","large","text-lg","text-xl"]
        }
    }
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    url: "www.google.dk",
    linkname: "Google",
    color:"slate-500",
    size:"text-base",
}