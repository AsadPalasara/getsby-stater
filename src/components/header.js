import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Header = ({ siteTitle }) => (
  <header className="header-nav">
    <div className="container">
      <div className="row">
        <div className="logo col-12 col-sm-3 col-xl-7">
          <Link to="/"> LOGO </Link>
        </div>
        <ul className="nav col-12 col-sm-9 col-xl-5 align-items-center">
          <li>
            <Link to="/" activeClassName="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blogs/" activeClassName="active" partiallyActive="true" >
              blogs
            </Link>
          </li>
          <li>
            <Link to="/about/" activeClassName="active" >
              About
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeClassName="active">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
