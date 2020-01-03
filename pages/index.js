import React, { Component } from 'react'
import config from '../config'
import Login from '../components/layouts/login'

const font = config.font

export default class Index extends Component {
  componentDidMount(){
    localStorage.removeItem("token")
    localStorage.removeItem("data")
  }
  render() {
    return (
      <div style={{ fontFamily: font }}>
        <Login />
      </div>
    )
  }
}
