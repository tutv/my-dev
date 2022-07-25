import React, {Component} from 'react'
import ResumeHeaderV2 from "./ResumeHeaderV2"
import Education from "./Education"


class ResumeV2 extends Component {
    render() {
        return (
            <div className="ResumeV2">
                <ResumeHeaderV2/>
                <Education/>
            </div>
        )
    }
}


export default ResumeV2
