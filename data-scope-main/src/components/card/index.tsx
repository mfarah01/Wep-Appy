import React, { ReactNode } from "react"

interface Props {
  title: string
  icon: ReactNode
  text: string
  iconColor: string
  className?: string
}
const Card = ({ title, icon, text, iconColor, className }: Props) => {
  return (
    <div
      className={`flex flex-col items-center w-full md:w-[520px] h-full text-center  sm:flex-row sm:text-left py-4 ${
        className && className
      }`}
    >
      <i
        className={`sm:text-4xl text-2xl p-4 sm:mt-5 rounded-xl sm:self-start ${iconColor}`}
      >
        {icon}
      </i>
      <div className="sm:pl-8">
        <h3 className="font-semibold pt-4 text-lg sm:text-xl">{title}</h3>
        <p className="text-heather-field text-base py-4 sm:text-lg sm:w-1/2 sm:min-w-[350px]">
          {text}
        </p>
      </div>
    </div>
  )
}

export default Card
