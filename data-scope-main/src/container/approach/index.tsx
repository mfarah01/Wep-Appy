import React, { Ref } from "react"
import { MdOutlinePublic, MdOutlineMyLocation } from "react-icons/md"
import { IoAnalytics, IoDocumentTextOutline } from "react-icons/io5"
import Card from "../../components/card"

interface Props {
  learnMoreRef: any
}
const Approach = ({ learnMoreRef }: Props) => {
  const cardItems = [
    {
      title: "Business Requirement",
      text: "We take the time to set up initial calls to clearly understand the domain.",
      iconColor: "bg-light-azure-tide",
      icon: <MdOutlinePublic />
    },
    {
      title: "Data Exploration & Scoping",
      text: "Once we obtained data access we can begin to explore the data to identify where we can extract value and define exactly what we want to achieve.",
      iconColor: "bg-light-golden-chalice",
      icon: <MdOutlineMyLocation />
    },
    {
      title: "Analytics",
      text: "We run analytics on the data to identify trends & patterns, derive insights in close collaboration with the domain expert in your organization.",
      iconColor: "bg-light-bloodletter",
      icon: <IoAnalytics />
    },
    {
      title: "Strategic Report",
      text: "Present findings, provide recommendations for the business, discussion on how to move forward.",
      iconColor: "bg-light-french-lilac-blue",
      icon: <IoDocumentTextOutline />
    }
  ]
  return (
    <div ref={learnMoreRef} className="pb-20 flex flex-col items-center ">
      <h2 className="text-4xl py-8">Our Approach</h2>
      <div className="py-10 bg-lynx-white px-4 rounded-xl flex flex-col items-center nav:flex-row nav:justify-center nav:items-start nav:flex-wrap sm:p-8 max-w-[1200px]">
        {cardItems.map((card, i) => (
          <Card
            key={i}
            title={card.title}
            icon={card.icon}
            iconColor={card.iconColor}
            text={card.text}
          />
        ))}
      </div>
    </div>
  )
}

export default Approach
