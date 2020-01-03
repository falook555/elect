import React, { Component } from 'react'
import config from '../config'
import AdminHOC from '../components/layouts/admin.hoc'
import AdminContentDetail from '../components/layouts/admin.content.detail'

const font = config.font


// console.log(this.props.url.query.emonth
//   this.props.url.query.eyear
//   this.props.url.query.badenumber)

export default class Detail extends Component {
  constructor(props) {
    super(props)
   
  }
  componentDidMount() {
    console.log(this.props)
  }
    render() {
        return (
          <div style={{ fontFamily: font }}>
          <AdminHOC contentTitle ="รายละเอียดค่าไฟ ค่าน้ำ">
            <AdminContentDetail emonth={this.props.url.query.emonth} eyear={this.props.url.query.eyear} badenumber={this.props.url.query.badenumber} />
          </AdminHOC>
          </div>
        )
    }
}


