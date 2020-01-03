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
                            <div className="col-lg-4 text-center">
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
                            <div className="col-lg-4 text-center">
                                <img className="card-img-top hover12" src="static/dist/img/facebook.png" alt="Card image cap" style={{ height: 70, width: 65 }} />
                                <div style={{ marginTop: 10 }}>
                                    <p style={{ marginTop: 5, fontSize: 18, fontWeight: 'bold' }}>
                                        Facebook
                                    </p>
                                    <p style={{ marginTop: 5 }}>
                                        
                                    </p>
                                    <p style={{ marginTop: 5 }}>
                                        24 ชั่วโมง
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center">
                                <img className="card-img-top hover12" src="static/dist/img/line.png" alt="Card image cap" style={{ height: 75, width: 70 }} />
                                <div style={{ marginTop: 10 }}>
                                    <p style={{ marginTop: 5, fontSize: 18, fontWeight: 'bold' }}>
                                        Line
                                    </p><p style={{ marginTop: 5 }}>
                                        
                                    </p><p style={{ marginTop: 5 }}>
                                        24 ชั่วโมง
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: 40, marginBottom: 20 }}>
                            <div className="col-lg-4 text-center">
                                <img className="card-img-top hover12" src="static/dist/img/email.png" alt="Card image cap" style={{ height: 70, width: 65 }} />
                                <div style={{ marginTop: 10 }}>
                                    <p style={{ marginTop: 5, fontSize: 18, fontWeight: 'bold' }}>
                                        Email
                                    </p>
                                    <p style={{ marginTop: 5 }}>
                                        
                                    </p><p style={{ marginTop: 5 }}>
                                        24 ชั่วโมง
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center">
                                <img className="card-img-top hover12" src="static/dist/img/address.png" alt="Card image cap" style={{ height: 70, width: 65 }} />
                                <div style={{ marginTop: 10 }}>
                                    <p style={{ marginTop: 5, fontSize: 18, fontWeight: 'bold' }}>
                                        ที่อยู่
                                    </p>
                                    <p style={{ marginTop: 5 }}>
                                        1 หมู่ 8 ตำบล คลองตาล อำเภอ ศรีสำโรง สุโขทัย 64120
                                        โทร 055-682030-42 อุบัติเหตุ ฉุกเฉิน แจ้ง หน่วยกู้ชีพศรีสังวร 
                                        โทร 1669 หรือ 055-681331
                                    </p>
                                    <p style={{ marginTop: 5 }}>
                                        24 ชั่วโมง
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}