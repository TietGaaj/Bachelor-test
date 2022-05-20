import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    sizingheight:{
      control:'select',
      options: ['min-h-1/2' , 'h-1/3' , 'h-2/3' , 'h-1/4' , 'h-2/4' , 'h-3/4' , 'h-1/5']
  },
  sizingwidth:{
    control:'select',
    options: ['w-1/2' , 'w-1/3' , 'w-2/3' , 'w-1/4' , 'w-2/4' , 'w-3/4' , 'w-1/5']
},

  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {

  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {

  label: 'Button',
};
