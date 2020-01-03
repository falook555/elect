import React, { Component } from 'react'
import config from '../config'
import AdminHOC from '../components/layouts/admin.hoc'
import AdminContentContact from '../components/layouts/admin.content.contact'

const font = config.font

export default class Contact extends Component {
    render() {
        return (
            <div style={{ fontFamily: font }}>
                <AdminHOC>
                    <AdminContentContact />
                </AdminHOC>
            </div>
        )
    }
}
