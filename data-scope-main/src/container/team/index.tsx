import React, { MouseEventHandler } from "react"
import Profile from "../../components/profile"
import { BsArrowDownCircleFill } from "react-icons/bs"

interface Props {
  teamRef: any
  executeScroll?: MouseEventHandler<HTMLButtonElement>
}

const Team = ({ teamRef, executeScroll }: Props) => {
  const profileItems = [
    {
      color: "bg-azure-tide",
      text: "Mustafa is a leading academic with years of experience in data science for large scale connected intelligent systems. He is particularly familiar with cloud data architecture specifically building, integrating, implementing Azure & AWS infrastructure.",
      initials: "MF",
      name: "Mustafa Farah"
    }
  ]

  return (
    <div ref={teamRef} className="pb-20 flex flex-col items-center ">
      <div className="nav:bg-grams-hair w-full flex justify-center items-center flex-col">
        <h2 className="text-4xl py-8 nav:pb-0 text-center">Meet our founder</h2>
        <div className=" bg-grams-hair flex items-center justify-center w-full py-6 rounded-xl mb-5 ">
          <div className="flex flex-col">
            {profileItems.map((profile, i) => (
              <Profile
                key={i}
                color={profile.color}
                text={profile.text}
                initials={profile.initials}
                name={profile.name}
              />
            ))}
          </div>
        </div>
        <button
          onClick={executeScroll}
          className="mb-8 bg-light-azure-tide hover:bg-lighter-azure-tide p-2 text-lg sm:text-lg md:text-xl md:p-4 md:mt-0"
        >
          Explore capabilties
          <span className="ml-3 inline-block align-middle text-2xl ">
            <BsArrowDownCircleFill />
          </span>
        </button>
      </div>
    </div>
  )
}

export default Team
