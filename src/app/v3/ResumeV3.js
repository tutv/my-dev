import ResumeHeader from "./ResumeHeader"
import Head from "next/head"
import ResumeBody from "./ResumeBody"


export default function ResumeV3() {
    return (
        <div className="ResumeV3">
            <Head>
                <title>Tran Van Tu - Senior Software Engineer</title>
            </Head>
            <div className="ResumeV3Inner">
                <ResumeHeader/>
                <ResumeBody/>
            </div>
        </div>
    )
}
