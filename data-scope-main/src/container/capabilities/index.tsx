import React from "react"
import { IoBarChart, IoDocumentText } from "react-icons/io5"
import { CgSmartphoneChip } from "react-icons/cg"
import Card from "../../components/card"

interface Props {
  capabilitiesRef: any
}

const Capabilities = ({ capabilitiesRef }: Props) => {
  const cardItems = [
    {
      title: "Data Science",
      text: "Deployment of novel tools to analyze and manipulate data.",
      iconColor: "bg-light-azure-tide",
      icon: <IoBarChart />
    },
    {
      title: "Analytics",
      text: "Discovering, interpreting, and communicating meaningful patterns in data.",
      iconColor: "bg-light-bloodletter",
      icon: <IoDocumentText />
    },
    {
      title: "Machine Learning and AI",
      text: "Test predictions using machine-learning models.",
      iconColor: "bg-light-golden-chalice",
      icon: <CgSmartphoneChip />
    }
  ]
  return (
    <div
      ref={capabilitiesRef}
      className="pb-20 flex flex-col items-center pt-20"
    >
      <h2 className="text-4xl py-8">Our Capabilities</h2>
      <div className="py-10 bg-lynx-white px-4 rounded-xl flex flex-col lg-laptop:flex-row items-center lg:items-start  lg:flex-wrap sm:p-8 max-w-[1052px]">
        {cardItems.map((card, i) => (
          <Card
            key={i}
            title={card.title}
            icon={card.icon}
            iconColor={card.iconColor}
            text={card.text}
            className="md:w-6/12"
          />
        ))}
      </div>
    </div>
  )
}

export default Capabilities
