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
      data: [],
      emonth:"0",
      eyear:"0"
    }
  }

  componentDidMount() {
    console.log(Api)
    this.getMont() 
  }

  getMont = async (emonth=0,eyear=0) => {
    let token = localStorage.getItem('token')
    let decode = jwt_decode(token)
    //  let emonth1 = emonth == null ? 0 : emonth
    //  let eyear1 = eyear == null ? 0 : eyear

    //  console.log(emonth1)

    try {
      let res = await Axios.get(`${Api}/get-main/${decode.badgenumber}/${emonth}/${eyear}`)
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

  emonth = (e) =>{
    this.setState({
      emonth : e.target.value
    })
    let eyear = this.state.eyear == 0 ? 0 : this.state.eyear
    this.getMont(e.target.value,eyear)
  }
  eyear = (e) =>{
    this.setState({
      eyear : e.target.value
    })

    let emonth = this.state.emonth == 0 ? 0 : this.state.emonth

    this.getMont(emonth,e.target.value)


  
  }

  render() {
    return (
      <div>
        <div className="btn-group col-6">
          <select className="form-control"  onChange={this.emonth} name="emonth" value={this.state.emonth}>
            <option value = "0">เลือกเดือน</option>
            <option value = "01">มกราคม</option>
            <option value = "02">กุมภาพันธ์</option>
            <option value = "03">มีนาคม</option>
            <option value = "04">เมษายน</option>
            <option value = "05">พฤษภาคม</option>
            <option value = "06">มิถุนายน</option>
            <option value = "07">กรกฎาคม</option>
            <option value = "08">สิงหาคม</option>
            <option value = "09">กันยายน</option>
            <option value = "10">ตุลาคม</option>
            <option value = "11">พฤศจิกายน</option>
            <option value = "12">ธันวาคม</option>
          </select>
        </div>

        <div className="btn-group col-6">
          <select className="form-control"  onChange={this.eyear} name="eyear" value={this.state.eyear} >
            <option value = "2014">เลือกปี</option>
            <option value = "2015">2558</option>
            <option value = "2016">2559</option>
            <option value = "2017">2560</option>
            <option value = "2018">2561</option>
            <option value = "2019">2562</option>
            <option value = "2020">2563</option>
            <option value = "2021">2564</option>
            <option value = "2022">2565</option>
            <option value = "2023">2566</option>
            <option value = "2024">2567</option>
            <option value = "2025">2568</option>
          </select>
        </div>
        <br /><br />

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
                  <a href="#" >
                    <button type="button" onClick={() => this.onClickList(item.emonth, item.eyear)} className="btn btn-block bg-gradient-warning btn-sm">เข้าไปดู</button>
                  </a>
                </div>
              </div><br />
            </div>
          })}
        </div>
      </div>
    )
  }
}


