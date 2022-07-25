import React, {Component} from 'react'
import ResumeHeaderV2 from "./ResumeHeaderV2"
import Education from "./Education"
import WorkExperience from "./WorkExperience"
import Achievements from "./Achievements"
import Interests from "./Interests"


class ResumeV2 extends Component {
    render() {
        return (
            <div className="ResumeV2">
                <ResumeHeaderV2/>
                <Education/>
                <WorkExperience/>
                <Achievements/>
                <Interests/>
            </div>
        )
    }
}


export default ResumeV2
