import React, {Component} from 'react'
import PropTypes from 'prop-types'
import HeaderQR from "./HeaderQR"


class ResumeHeaderV2 extends Component {
    render() {
        return (
            <div className="ResumeHeaderV2 d-flex">
                <HeaderQR/>

                <div className="Left">
                    <img src="/images/avatar.jpg" width="120" alt="Avatar"/>
                </div>

                <div className="Right">
                    <h1>Tran Van Tu</h1>

                    <div className="Sub">
                        <label>Date of birth:</label>
                        <span>November 05, 1995</span>
                    </div>

                    <div className="Sub">
                        <label>Gender:</label>
                        <span>Male</span>
                    </div>

                    <div className="Sub">
                        <label>Phone:</label>
                        <span>+84373428920</span>
                    </div>

                    <div className="Sub">
                        <label>Email:</label>
                        <span>tutv95@gmail.com</span>
                    </div>

                    <div className="Sub">
                        <label>Address:</label>
                        <span>S202, Vinhomes Smart City, Tay Mo, Nam Tu Liem, Ha Noi</span>
                    </div>
                </div>
            </div>
        )
    }
}

ResumeHeaderV2.propTypes = {}

export default ResumeHeaderV2
