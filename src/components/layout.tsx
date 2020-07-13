import React from "react"
import { Link } from "gatsby"
import Bio from "./bio"

const Layout = ({ location, title, children }) => {
  return (
    <div>
      <div className="container mb-6">
        <h1 className="title has-text-dark has-text-centered">
          {title}
        </h1>
        <h2 className="subtitle has-text-centered">
          <small><Bio /></small>
        </h2>
      </div>
      <div className="container">
        {children}
      </div>
    </div>
  )
}

export default Layout
