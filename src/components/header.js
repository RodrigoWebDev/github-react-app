'use strict'

import React from 'react'
import Search from './search'

const Header = ({handleSearch}) => (
  <div className="header text-center">
    <h1 className="text-center"><i className="fab fa-github-alt"></i> Github Search App</h1>
    <span>Application created by Rodrigo Queiroz <i className="fas fa-coffee"></i></span><br/>
    <span><a href="https://github.com/RodrigoWebDev/github-app" target="_blank"><i className="fab fa-github"></i> Source code</a></span>
    <Search handleSearch={handleSearch}/>
  </div>
)

export default Header
