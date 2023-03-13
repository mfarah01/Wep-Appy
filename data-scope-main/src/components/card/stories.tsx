import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { MdOutlinePublic } from "react-icons/md"

import Card from "./index"

export default {
  title: "Components / Card",
  component: Card,
  argType: {
    title: "Business Requirements",
    icon: <MdOutlinePublic />,
    iconColor: "bg-light-azure-tide",
    text: "We take the time to set up initial calls to clearly understand the domain"
  }
} as ComponentMeta<typeof Card>
const Template: ComponentStory<typeof Card> = args => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  title: "Business Requirements",
  icon: <MdOutlinePublic />,
  iconColor: "bg-light-azure-tide",
  text: "We take the time to set up initial calls to clearly understand the domain"
}

export const Gold = Template.bind({})
Gold.args = {
  ...Default.args,
  iconColor: "bg-light-golden-chalice"
}
export const Orange = Template.bind({})
Orange.args = {
  ...Default.args,
  iconColor: "bg-light-bloodletter"
}
export const Lilac = Template.bind({})
Gold.args = {
  ...Default.args,
  iconColor: "bg-light-french-lilac-blue"
}
