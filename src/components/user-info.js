'use strict'

import React , { PropTypes } from 'react'

const UserInfo = ({ userInfo }) => (
  <div className="user-info container">
    <div className="row mb-5">
      <div className="col-md-4">
        <img className="prof-img img-fluid rounded-circle shadow" src={userInfo.avatar} alt="User Avatar"/>
      </div>
      <div className="col-md-8">
        <h2 className="text-center text-md-left mb-5"><i className="fas fa-user mr-2"></i><a href={userInfo.url} target="_blank">{userInfo.name}</a></h2>
        <p className="user-info__bio"><i className="fas fa-pencil-alt mr-2"></i> {userInfo.bio}</p>
        <hr/>
        <ul className="user-info__list">
          <li><i className="far fa-file mr-2"></i> Repositórios: {userInfo.repos}</li>
          <li><i className="fas fa-users mr-2"></i> Seguidores: {userInfo.followers}</li>
          <li><i className="fas fa-user-plus mr-2"></i> Seguindo: {userInfo.following}</li>
        </ul>
      </div>
    </div>
    <hr/>
  </div>
)

/*UserInfo.propTypes = {
  userInfo : PropTypes.shape({
    photo : 'https://avatars0.githubusercontent.com/u/30677819?v=4',
    userName : PropTypes.string.isRequired,
    login : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    reps : PropTypes.number.isRequired,
    followers : PropTypes.number.isRequired,
    following : PropTypes.number.isRequired,
    starreds : PropTypes.number.isRequired
  })
}*/
export default UserInfo
