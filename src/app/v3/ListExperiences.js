import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendarDays} from "@fortawesome/free-regular-svg-icons"
import {faServer} from "@fortawesome/free-solid-svg-icons"


export default function ListExperiences() {
    return (
        <div className="ListExperiences">
            <div className="Experience">
                <div className="JobTitle">Senior Software Engineer</div>
                <div className="JobOrg">Merchize, Hanoi</div>

                <div className="Meta d-flex">
                    <div className="Duration">
                        <FontAwesomeIcon icon={faCalendarDays}/> Nov 2018 - Jul 2022 (3 yrs 9 mos)
                    </div>

                    <div className="TechStacks d-flex">
                        <FontAwesomeIcon icon={faServer}/>
                        <div className="Stacks">
                            <span className="Stack">Node.JS</span>
                            <span className="Stack">AWS</span>
                            <span className="Stack">MongoDB</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
