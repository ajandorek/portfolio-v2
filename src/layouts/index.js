import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './styles/index.scss'

const Header = () => (
  <div>
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="menu">
        <Link to="/" className="menu-text logo">Alec Jandorek</Link>
      </ul>
    </div>
    <div className="top-bar-right">
      <ul className="menu">
        <li>
          <Link to="/"
            className='currentPage'
            activeClassName='currentPage'>Home</Link>
        </li>
        <li>
          <Link to="/portfolio" activeClassName='currentPage'>Portfolio</Link>
        </li>
        <li>
          <Link to="/contact_me" activeClassName='currentPage'>Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Alec Jandorek"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      // style={{
      //   margin: '0 auto',
      //   maxWidth: 960,
      //   padding: '0px 1.0875rem 1.45rem',
      //   paddingTop: 0,
      // }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
