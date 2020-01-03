import React, { Component } from 'react'
import config from '../../config.js'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

const Api = config.api

export default class AdminContentUser extends Component {

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

            <div className="card-body box-profile">
                <div className="text-center">
                    <img className="profile-user-img img-fluid img-circle" src="../../static/dist/img/user.png" alt="User profile picture" />
                </div>
                <h3 className="profile-username text-center">{data.Name}</h3>
                <ul className="list-group list-group-unbordered mb-3">
                    <li className="list-group-item">
                        <b>ตำแหน่ง : </b> <a className="float-right">{data.DEFAULTDEPTID}</a>
                    </li>
                </ul>
            </div>

        )
    }
}