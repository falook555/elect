import React, { Component } from 'react'
import Link from 'next/link'

export default class AdminHeader extends Component {

    onClick = () =>{
        // console.log("5555")
        window.location = "/"
    }
    render() {
        return (
            <nav className="main-header navbar navbar-expand navbar-white nav-item">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars" /></a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href="/">
                        <a onClick={this.onClick} className="nav-link" data-widget="control-sidebar" data-slide="true" href="#">
                            <i className="fas fa-sign-out-alt"/> Logout
                        </a>
                        </Link>
                    </li>
                </ul>

            </nav >
        )
    }
}
