import React, {Component} from 'react'
import {QRCodeSVG} from 'qrcode.react'


class HeaderQR extends Component {
    render() {
        return (
            <div className="HeaderQR">
                <QRCodeSVG size="80" value="https://bit.ly/tutv-cv"/>
            </div>
        )
    }
}


export default HeaderQR
