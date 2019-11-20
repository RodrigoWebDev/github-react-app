'use strict'

import React , {PropTypes} from 'react'

const Search = ({ isDisabled, handleSearch}) => (
  <div className="search text-center">
    <div className="form-group">
      <label>
        <input className="form-control" type="text" placeholder="Enter a Github username"
          onKeyUp={handleSearch} disabled={isDisabled}/>
      </label>
    </div>
  </div>
)

Search.propTypes = {
  //handleSearch : PropTypes.func.isRequired,
  //isDisabled : PropTypes.bool.isRequired
}
export default Search
