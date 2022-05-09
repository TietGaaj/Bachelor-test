import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Link } from "./Link";
import { textpair } from "./storytypes/types";

export default {
  title: "Simple components/Link",
  Component: Link,
  argTypes: {
    size: {
      control: "select",
      options: [textpair.Small.class,textpair.Base.class,textpair.Large.class,textpair.XL.class]
      labels: {
        "Small":textpair.Small.class,
        Base: "text-base",
        Large: "text-lg",
        XL: "text-xl",
      },
    },
    color: {
      control: "color",
    },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  url: "www.google.dk",
  linkname: "Google",
  color: "slate-500",
  size: "text-base",
  underline: true,
};
