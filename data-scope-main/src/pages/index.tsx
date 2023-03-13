import type { NextPage } from "next"
import Hero from "../components/hero"
import Approach from "../container/approach"
import { IoIosAnalytics } from "react-icons/io"
import Team from "../container/team"
import Capabilities from "../container/capabilities"
import Contact from "../components/contact"
import Footer from "../components/footer"
import { MutableRefObject, useEffect, useRef, useState } from "react"
import { CgMenu, CgClose } from "react-icons/cg"

const Home: NextPage = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false)
  const learnMoreRef = useRef<null | HTMLDivElement>(null)
  const teamRef = useRef<null | HTMLDivElement>(null)
  const capabilitiesRef = useRef<null | HTMLDivElement>(null)
  const contactUsRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    if (navOpen) {
      document.body.style.position = "fixed"
      document.body.style.overflow = "hidden"
      return
    }
  }, [navOpen])

  const executeScroll = (ref: MutableRefObject<HTMLDivElement | null>) => {
    if (!ref?.current) {
      return
    }
    document.body.style.position = "static"
    document.body.style.overflow = "unset"
    ref.current.scrollIntoView({ behavior: "smooth" })
  }

  const navItems = [
    { heading: "Approach", ref: learnMoreRef },
    { heading: "Team", ref: teamRef },
    { heading: "Capabilities", ref: capabilitiesRef },
    { heading: "Contact us", ref: contactUsRef }
  ]

  const handleMobileNav = (ref: MutableRefObject<HTMLDivElement | null>) => {
    setNavOpen(false)
    executeScroll(ref)
  }

  return (
    <div className="bg-pale-grey w-full h-full">
      <nav className="w-full pt-4 nav:pt-10 px-6 nav:px-20 flex justify-between top-0 left-0">
        <i className="text-5xl">
          <IoIosAnalytics />
        </i>
        <i
          className="nav:hidden text-4xl inline-block cursor-pointer "
          onClick={() => setNavOpen(!navOpen)}
        >
          <CgMenu />
        </i>
        {navOpen && (
          <div
            className={`absolute w-full h-full bg-pale-grey z-50 -my-4 -mx-4`}
          >
            <i
              className="text-4xl cursor-pointer w-full flex justify-end px-4 py-4"
              onClick={() => setNavOpen(!navOpen)}
            >
              <CgClose />
            </i>
            <ul className="flex flex-col items-start justify-between text-left h-[calc(100vh_-_200px)] ">
              {navItems.map((item, i) => (
                <li
                  className="pl-8 py-5 font-medium cursor-pointer text-xl sm:text-lg md:text-xl w-full"
                  onClick={() => handleMobileNav(item.ref)}
                  key={i}
                >
                  {item.heading}
                </li>
              ))}
            </ul>
          </div>
        )}
        <ul className="hidden nav:flex nav:visible">
          {navItems.map((item, i) => (
            <li
              className="px-8 py-4 cursor-pointer text-md sm:text-lg md:text-xl hover:bg-grim-reaper hover:text-pale-grey"
              onClick={() => executeScroll(item.ref)}
              key={i}
            >
              {item.heading}
            </li>
          ))}
        </ul>
      </nav>
      <div className="px-8">
        <Hero executeScroll={() => executeScroll(learnMoreRef)} />
        <Approach learnMoreRef={learnMoreRef} />
        <Team
          teamRef={teamRef}
          executeScroll={() => executeScroll(capabilitiesRef)}
        />
        <Capabilities capabilitiesRef={capabilitiesRef} />
        <Contact contactUsRef={contactUsRef} />
        <Footer />
      </div>
    </div>
  )
}

export default Home
