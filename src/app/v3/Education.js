import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendarDays} from "@fortawesome/free-regular-svg-icons"
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"


export default function Education() {
    return (
        <div className="Education">
            <h2 className="HeadingSection">Education</h2>
            <div className="EduTitle">Bachelor of Science - BS, Information Technology</div>
            <div className="EduOrg secondary">VNU University of Engineering and Technology</div>
            <div className="EduMeta d-flex justify-content-between">
                <div className="Duration"><FontAwesomeIcon icon={faCalendarDays}/> Sep 2013 - Jul 2017</div>
                <div className="Location"><FontAwesomeIcon icon={faLocationDot}/> Vietnam</div>
            </div>
        </div>
    )
}
