'use strict'

import React from 'react'

const Reps = ( { className, title, repos } ) => (
  <div className={className}>
    <h2>{title}</h2>
    <ul>
      {repos.map((rep, index) => (
        <li key={index}>
          <a href={rep.link} target="_blank"><i className="far fa-file"></i> {rep.name}</a>
          <hr/>
        </li>
      ))}
    </ul>
  </div>
)

Reps.defaultProps = {
  className : ''
}

/*Reps.propTypes = {
  className : React.PropTypes.string,
  title : React.PropTypes.string.isRequired,
  reps : React.PropTypes.array
}*/

export default Reps
