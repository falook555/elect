import React, { Component } from 'react'
import './main.scss'
import config from '../../config.js'
import Axios from 'axios'
const Api = config.api

export default class AdminContentDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [1, 2, 3],
            water: 0
        }
    }

    componentDidMount() {
        console.log(this.props.error)
        this.getDetail()
    }

    getDetail = async () => {
        let data = localStorage.getItem('data')
        data = JSON.parse(data)
        console.log(data)
        try {
            let res = await Axios.get(`${Api}/get-detail/${data.emonth}/${data.eyear}/${data.badgenumber}`)

            this.setState({
                data: res.data,

            })

        } catch (error) {
            console.log(error)
        }
    }

    render() {
        let water = 0
        let sum = 0
        return (
            <div className="row">
                {/* ค่าไฟ */}
                <div className="col-md-6">
                    <div className="card bg-warning disabled color-palette">
                        <div className="card-header">
                            <h3 className="card-title total-font">ค่าไฟ</h3>
                        </div>
                        <div className="card-body p-0">

                            {this.state.data.map((item, i) => {
                                water = parseInt(water) + parseInt(item.water)
                                sum = parseFloat(water) + parseFloat(item.paypal)
                                let tshow = i == 0 ? 'collapse show' : 'collapse'
                                return <div id="accordion">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" data-toggle="collapse" data-target={"#collapseOne" + i} aria-expanded={i == 0 ? true : false} aria-controls={"collapseOne" + i}>
                                                    Meter {item.meter}
                                                </button>
                                            </h5>
                                        </div>
                                        <div id={"collapseOne" + i} className={tshow} aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body">
                                                <table className="table table-striped">
                                                    <tbody className="body-font">
                                                        <tr>
                                                            <td>เลขครั้งก่อน</td>
                                                            <td>{item.monthlast}</td>
                                                            <td>หน่วย</td>
                                                        </tr>
                                                        <tr>
                                                            <td>เลขครั้งหลัง</td>
                                                            <td>{item.monthcurrent}</td>
                                                            <td>หน่วย</td>
                                                        </tr>
                                                        <tr>
                                                            <td>จำนวนที่ใช้</td>
                                                            <td>{item.monthcurrent-item.monthlast}</td>
                                                            <td>กว.หน่วย</td>
                                                        </tr>
                                                        <tr>
                                                            <td>ft/หน่วย</td>
                                                            <td>{item.perunit}</td>
                                                            <td>บาท</td>
                                                        </tr>
                                                        <tr>
                                                            <td>จำนวนเงินรวม</td>
                                                            <td>{item.total}</td>
                                                            <td>บาท</td>
                                                        </tr>
                                                        <tr>
                                                            <td>เปอร์เซ็นที่ต้องจ่าย</td>
                                                            <td>{item.persent}</td>
                                                            <td>เปอร์เซ็น</td>
                                                        </tr>
                                                        <tr className="total-font">
                                                            <td>ยอดค่าไฟจ่ายตามจริง</td>
                                                            <td>{item.paypal}</td>
                                                            <td>บาท</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}

                        </div>
                    </div>
                </div>
                {/* ค่าไฟ */}

                {/* ค่าน้ำ */}
                <div className="col-md-6">
                    <div className="card bg-warning disabled color-palette">
                        <div className="card-header">
                            <h3 className="card-title total-font">ค่าน้ำ</h3>
                        </div>
                        <div className="card-body p-0">
                            <table className="table table-striped">
                                <tbody>
                                    <tr className="total-font">
                                        <td>ยอดรวม</td>
                                        <td>{water}</td>
                                        <td>บาท</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* ค่าน้ำ */}

                {/* รวม */}
                <div className="col-md-12">
                    <div className="card bg-warning disabled color-palette">
                        <div className="card-body p-0">
                            <table className="table table-striped">
                                <tbody>
                                    <tr className="total-font">
                                        <td>รวมทั้งหมด</td>
                                        <td>{sum.toFixed(2)}</td>
                                        <td>บาท</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* รวม */}


            </div>

        )
    }
}