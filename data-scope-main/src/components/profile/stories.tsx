import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Profile from "./index"

export default {
  title: "Components / Profile",
  component: Profile,
  argType: {
    color: "bg-bloodletter",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
  }
} as ComponentMeta<typeof Profile>
const Template: ComponentStory<typeof Profile> = args => <Profile {...args} />

export const Default = Template.bind({})
Default.args = {
  color: "bg-bloodletter",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  initials: "Mm",
  name: "Maryan Mohamed"
}
