import ResumeHeader from "./ResumeHeader"
import Head from "next/head"
import ResumeBody from "./ResumeBody"


export default function ResumeV3() {
    return (
        <div className="ResumeV3 container-fluid">
            <Head>
                <title>Tran Van Tu - Senior Software Engineer</title>
            </Head>
            <ResumeHeader/>
            <ResumeBody/>
        </div>
    )
}
