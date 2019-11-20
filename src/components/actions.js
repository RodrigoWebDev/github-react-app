'use strict'

import React, { PropTypes } from 'react'

const Actions = ({ getReps }) => (
  <div className="actions mb-5">
    <button onClick={getReps} className="btn btn-color mr-3 mb-3 mb-md-0">Ver repositórios</button>
  </div>
)

/*Actions.propTypes = {
  getReps : PropTypes.func.isRequired
}*/
export default Actions
