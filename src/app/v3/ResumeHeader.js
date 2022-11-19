import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import {faPhone, faLocationDot, faLink} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'


export default function ResumeHeader() {
    return (
        <div className="ResumeHeader mb-3">
            <h1>Tran Van Tu</h1>
            <h3 className="SubTitle">Senior Software Engineer</h3>
            <div className="Contact d-flex">
                <div className="Email">
                    <a href="mailto:tutv95@gmail.com"><FontAwesomeIcon icon={faEnvelope}/> tutv95@gmail.com</a>
                </div>

                <div className="Phone ps-3">
                    <a href="tel:+84373428920"><FontAwesomeIcon icon={faPhone}/> +84 373428920</a>
                </div>

                <div className="Address ps-3">
                    <span><FontAwesomeIcon icon={faLocationDot}/> Hanoi, Vietnam</span>
                </div>

                <div className="Linkedin ps-3">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tutv">
                        <FontAwesomeIcon icon={faLinkedin}/> tutv
                    </a>
                </div>

                <div className="Linkedin ps-3">
                    <a target="_blank" rel="noreferrer" href="https://tutv.dev">
                        <FontAwesomeIcon icon={faLink}/> tutv.dev
                    </a>
                </div>
            </div>
        </div>
    )
}

