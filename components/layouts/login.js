import React, { Component } from 'react'
import './main.scss'
import Axios from 'axios'
import config from '../../config.js'
import jwt_decode from 'jwt-decode'

const Api = config.api

class Login extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            isMsg:false
        }
    }

    onchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = async () => {

        let post = {
            username: this.state.username,
            password: this.state.password
        }
        try {
            let res = await Axios.post(`${Api}/signin`, post)
            localStorage.setItem('token', res.data.token)
            let decode = jwt_decode(res.data.token)
            window.location = "/home"

        } catch (error) {
            console.log(error)
            this.setState({
                isMsg : true
            })
        }
    }

    render() {
        return (
            <div className="login-page body-main" >

                <div className="login-box">
                    <div className="login-logo">
                        <a href="#">เช็คค่าน้ำ ค่าไฟ</a>
                    </div>
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">ล็อคอินเข้าสู่ระบบเช็คค่าน้ำค่าไฟของท่าน</p>
                            {this.state.isMsg  ? 
                            <p className="login-box-msg" style={{ color:'red'}}>ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง</p> : ''
                            }
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Username" name="username" onChange={this.onchange} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user-tie" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Password" name="password" onChange={this.onchange} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <button onClick={this.onSubmit} type="button" className="btn btn-success btn-block ">Sign In</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Login