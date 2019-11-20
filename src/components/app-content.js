'use strict'

import React , {PropTypes} from 'react'
import Header from './header'
import UserInfo from './user-info'
import Actions from './actions'
import Reps from './reps'

const AppContent = ({
  userInfo ,
  repos,
  stars,
  handleSearch,
  getReps,
  getStars,
  isFetching,
  isDisabled
}) => (
  <div className="app">
    <Header isDisabled={isFetching} handleSearch={handleSearch}/>
    {
      //Se estiver carregando mostra uma animação de loader
      isFetching &&
      <div className="loader text-center">
        <i className="fas fa-spinner fa-spin"></i>
      </div>
    }
    { !!userInfo && <UserInfo userInfo={userInfo} />}

    <div className="container middle">
      { !!userInfo && <Actions getStars={getStars} getReps={getReps}/>}

      { !!repos.length && <Reps className="reps" title="Repositórios" repos={repos} />}
    </div>
  </div>
)

/*AppContent.propTypes = {
  userInfo : PropTypes.object ,
  repos : PropTypes.array.isRequired,
  stars : PropTypes.array.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getReps: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
}*/

export default AppContent
