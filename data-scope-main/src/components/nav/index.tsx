import React from "react"

const Nav = () => {
  return (
    <nav className="navbar w-full bg-pink-500">
      <div className="container-lg px-0">
        <div className="flex w-full items-center">
          <a className="nav-brand mr-auto ml-0" href="#">
            Material Tailwind Navbar
          </a>
          <button
            navbar-trigger=""
            className="navbar-trigger ml-auto mr-0 mb-0 lg:hidden xl:hidden"
            type="button"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="text-4xl bg-pink-500 p-8">CLICK ME</span>
          </button>
        </div>
        <div className="collapse navbar-collapse" navbar-menu="">
          <ul className="navbar-nav">
            <li>
              <a className="nav-link" aria-current="page" href="#">
                <i className="material-icons mr-2 text-base opacity-60">
                  article
                </i>
                <span>Documentation</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                <i className="material-icons mr-2 text-base opacity-60">apps</i>
                <span>Components</span>
              </a>
            </li>
            <li className="flex">
              <a className="nav-link" href="#">
                <i className="material-icons mr-2 text-base opacity-60">
                  view_carousel
                </i>
                <span>Templates</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                <i className="fab fa-github mr-2 text-base opacity-60"></i>
                <span>Github</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
