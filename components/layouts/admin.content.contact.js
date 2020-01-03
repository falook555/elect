import React, { Component } from 'react'

export default class AdminContentContact extends Component {
    render() {
        return (
            <div className="col-lg-12">
                <div className="card card-next">
                    <p style={{ fontSize: 30, marginLeft: 25, marginTop: 10 }}>
                        ติดต่อเรา <hr />
                    </p>
                    <div className="contact-content">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <img className="card-img-top hover12" src="static/dist/img/phone.png" alt="Card image cap" style={{ height: 70, width: 65 }} />
                                <div style={{ marginTop: 10 }}>
                                    <p style={{ marginTop: 5, fontSize: 18, fontWeight: 'bold' }}>
                                        เบอร์โทรศัพท์
                                    </p>
                                    <p style={{ marginTop: 5 }}>
                                        2143,2144
                                    </p>
                                    <p style={{ marginTop: 5 }}>
                                        24 ชั่วโมง
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                                <div style={{ marginTop: 10 }}>
                                    <p style={{ marginTop: 5, fontSize: 18, fontWeight: 'bold' }}>
                                        Create by นาย กนต์ธร โทนทรัพย์ สาขาวิศวกรรมคอมพิวเตอร์ คณะเทคโนโลยีอุตสาหกรรม มหาวิทยาลัยราชภัฏพิบูลสงคราม
                                    </p>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}