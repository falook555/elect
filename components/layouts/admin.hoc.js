import React, { Component } from 'react'
import AdminHeader from './admin.header'
import AdminSidebar from './admin.sidebar'
import AdminFooter from './admin.footer'
import AdminHContent from './admin.hcontent'

export default class AdminHOC extends Component {
    render() {
        return (
            <div className="wrapper">
                <AdminHeader />
                <AdminSidebar />
                <AdminHContent title={this.props.contentTitle}>
                    {this.props.children}
                </AdminHContent>
                <AdminFooter />
            </div>
        )
    }
}
