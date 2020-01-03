import React, { Component } from 'react'
import config from '../config'
import AdminHOC from '../components/layouts/admin.hoc'
import AdminContentUser from '../components/layouts/admin.content.user'

const font = config.font

export default class Users extends Component {
    render() {
        return (
            <div style={{ fontFamily: font }}>
                <AdminHOC>
                    <AdminContentUser />
                </AdminHOC>
            </div>
        )
    }
}
