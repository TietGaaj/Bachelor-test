import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import { Link } from './Link';

export default{
    title: 'Link',
    Component: Link,
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    url: "www.google.dk",
    linkname: "Google",
    color:"slate-500",
    size:"text-xl",
}