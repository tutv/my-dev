import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendarDays} from "@fortawesome/free-regular-svg-icons"
import {faServer} from "@fortawesome/free-solid-svg-icons"


export default function Experience({item}) {
    const {job_title, job_org, duration, tech_stacks, highlights}= item

    return (
        <div className="Experience">
            <div className="d-flex justify-content-between align-items-center">
                <div className="JobTitle">{job_title}</div>
                <div className="JobOrg secondary">{job_org}</div>
            </div>

            <div className="Meta d-flex justify-content-between">
                <div className="Duration">
                    <FontAwesomeIcon icon={faCalendarDays}/> {duration}
                </div>

                <div className="TechStacks">
                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faServer}/><span>  </span>
                        <div className="Stacks">
                            {
                                tech_stacks.map((stack, index) => {
                                    return (
                                        <span key={index} className="Stack">{stack}</span>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            <ul className="List">
                {
                    highlights.map((hl, index) => {
                        return (
                            <li key={index}>{hl}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
