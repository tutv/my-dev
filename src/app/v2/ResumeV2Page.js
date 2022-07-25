import React, {Component} from 'react'
import Head from "next/head"
import ResumeV2 from "./ResumeV2"


class ResumeV2Page extends Component {
    render() {
        return (
            <div className="ResumeV2Page">
                <Head>
                    <title>Tran Van Tu Resume</title>
                </Head>
                <ResumeV2/>
            </div>
        )
    }
}


export default ResumeV2Page
