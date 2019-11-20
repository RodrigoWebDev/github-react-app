'use strict'

import React from 'react'
import AppContent from '../components/app-content.js'
import ajax from '@fdaciuk/ajax'
import { Helmet } from "react-helmet"
import siteIcon from "../images/icon.png"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      userInfo : null,
      repos : [],
      stars : [],
      actions : {
        actionReps : [],
        actionStars : []
      },
      isFetching: false
    }
  }

  getGitHubApiUrl(login, type){
    const internalLogin = login ? `/${login}` : '';
    const internalType = type ? `/${type}` : '';
    return `https://api.github.com/users${internalLogin}${internalType}`
  }

  handleSearch (e) {
    const value = e.target.value
    const key = e.wich || e.keyCode
    const enter = 13
    //corrigi o bug de desabilitar e habilitar o campo de busca
    e.persist()
    if (key === enter){
      //Desabilita o campo de busca enquanto faz os requests dos dados
      this.setState({ isFetching: true })
      ajax().get(this.getGitHubApiUrl(value))
      .then((result) => {
        this.setState({
          userInfo : {
            avatar : result.avatar_url,
            url : result.html_url,
            name : result.name || 'No name',
            login : result.login,
            bio : result.bio || 'No bio',
            repos : result.public_repos,
            followers : result.followers,
            following : result.following,
            starred : result.starred_url
          },
          repos : [],
          stars : []
        })
      })
      .always(() => {
        //Reabilita o campo de busca depois que o request foi feito
        this.setState({ isFetching: false })
      })
    }
  }

  getReps(type){
    return (e) => {
      const userLogin = this.state.userInfo.login;
      ajax().get(this.getGitHubApiUrl(userLogin, type))
      .then((result) => {
        this.setState({
          [type] : result.map((repo) => ({
            name: repo.name,
            link: repo.html_url
          }))
        })
      })
    }
  }

  render(){
    return(
      <div>
        <Helmet title="Github Search App" defer={false} >
        <meta property="og:image" content={siteIcon} />
        </Helmet>
        <AppContent
          userInfo={this.state.userInfo}
          repos={this.state.repos}
          stars={this.state.stars}
          handleSearch={(e) => this.handleSearch(e)}
          getReps={this.getReps('repos')}
          getStars={this.getReps('starred')}
          isFetching={this.state.isFetching}
        />
      </div>
    )
  }
}

export default App
