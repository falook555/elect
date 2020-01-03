import React, { Component } from 'react'
import config from '../../config.js'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

const Api = config.api

class AdminSidebar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.getprofile()
    }

    getprofile = async () => {
        let token = localStorage.getItem('token')
        let decode = jwt_decode(token)
        let res = await axios.get(`${Api}/get-profile/${decode.badgenumber}`)

        this.setState({
            data: res.data[0],

        })


        // console.log(res)
    }


    render() {
        const { data } = this.state
        return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="home" className="brand-link">
                    <img src="static/dist/img/logo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">ค่าน้ำ ค่าไฟ</span>
                </a>
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="static/dist/img/user1.png" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="users" className="d-block">{data.Name}</a>
                        </div>
                    </div>
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item has-treeview menu-open">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-bars" />
                                    <p>
                                        เมนู
                                    <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="home" className="nav-link">
                                            <i className="nav-icon fas fa-home" />
                                            <p>
                                                หน้าหลัก
                                          </p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="contact" className="nav-link">
                                            <i className="nav-icon fas fa-address-card" />
                                            <p>
                                                ติดต่อ
                                          </p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="users" className="nav-link">
                                            <i className="nav-icon fas fa-user-tie" />
                                            <p>
                                                โปรไฟล์
                                          </p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        )
    }
}

export default AdminSidebar