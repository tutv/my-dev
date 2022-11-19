import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCloudDownload} from "@fortawesome/free-solid-svg-icons"

const fileName = 'Tran Van Tu - Senior Software Engineer.pdf'

export default function DownloadCV() {
    return (
        <div className="DownloadCV">
            <a href="/pdf/cv.pdf" download={fileName}>
                <FontAwesomeIcon icon={faCloudDownload}/>
                <span> PDF File</span>
            </a>
        </div>
    )
}

