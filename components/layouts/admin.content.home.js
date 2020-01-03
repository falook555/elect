import React, { Component } from 'react'
import config from '../../config.js'
import Axios from 'axios'
import jwt_decode from 'jwt-decode'
import './main.scss'

const Api = config.api
export default class AdminContentHome extends Component {

  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    console.log(Api)
    this.getMont()
  }

  getMont = async () => {
    let token = localStorage.getItem('token')
    let decode = jwt_decode(token)

    try {
      let res = await Axios.get(`${Api}/get-main/${decode.badgenumber}`)
      this.setState({
        data: res.data
      })

    } catch (error) {
      console.log(error)
    }
  }

  onClickList = (emonth, eyear) => {
    let token = localStorage.getItem('token')
    let decode = jwt_decode(token)

    let data = {
      emonth: emonth,
      eyear: eyear,
      badgenumber: decode.badgenumber
    }
    localStorage.setItem('data', JSON.stringify(data))
    window.location = `/details`

  }

  view = (month, eyear) => {

    let token = localStorage.getItem('token')
    let decode = jwt_decode(token)
    // Router.push({
    //   pathname : '/details',
    //   // query : { emonth:month,eyear:eyear,badenumber :decode.badgenumber}
    // })
    window.location = `/details?emonth=${month}&eyear=${eyear}&badenumber=${decode.badgenumber}`
    console.log(eyear)
  }

  render() {
    return (
      <div className="row">
        {this.state.data.map((item, i) => {
          return <div className="col-md-3" key={i}>
            <div className="card bg-success">
              <div className="card-header">
                <h3 className="card-title home-font">{item.month} {parseInt(item.eyear) + 543}</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                  </button>
                </div>
              </div>
              <div className="card-body home-font">
                ค่าไฟ : {item.elect} บาท <br />
                ค่าน้ำ : {item.water} บาท <hr />
                {/* ปุ่ม */}
                <a href="#" >
                  <button type="button" onClick={() => this.onClickList(item.emonth, item.eyear)} className="btn btn-block bg-gradient-warning btn-sm">เข้าไปดู</button>
                </a>
                {/* ปุ่ม */}
              </div>
            </div><br />
          </div>
        })}
      </div>
    )
  }
}


