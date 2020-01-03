import React, { Component } from 'react'
import config from '../config'
import AdminHOC from '../components/layouts/admin.hoc'
import AdminContentHome from '../components/layouts/admin.content.home'

const font = config.font

export default class Home extends Component {


  componentDidMount(){
    const token = localStorage.getItem('token')
    if (token == null){
      window.location = "/"
    }
  }
  render() {
    return (
      <div style={{ fontFamily: font }}>

        <AdminHOC contentTitle="ค่าไฟ & ค่าน้ำ">
          <AdminContentHome />
        </AdminHOC>
      </div>
    )
  }
}
