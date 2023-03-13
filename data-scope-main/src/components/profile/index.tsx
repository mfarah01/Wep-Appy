import React from "react"

interface Props {
  color: string
  initials: string
  name: string
  text: string
}

const Profile = ({ color, initials, name, text }: Props) => {
  return (
    <div className="flex items-center flex-col sm:flex-row align-center w-full nav:p-8   my3-2">
      <span
        className={`font-semibold text-white rounded-full flex items-center justify-center text-2xl font-bitter ${color} nav:ml-4`}
        style={{ minWidth: "80px", minHeight: "80px" }}
      >
        {initials}
      </span>
      <div className="">
        <p className="font-semibold py-2 sm:py-4 sm:text-xl sm:px-6 text-center sm:text-left">
          {name}
        </p>
        <p className="px-6 py-2 text-heather-field text-center sm:text-left max-w-[550px]">
          {text}
        </p>
      </div>
    </div>
  )
}

export default Profile
