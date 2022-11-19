const fileName = 'Tran Van Tu - Senior Software Engineer.pdf'

export default function DownloadCV() {
    return (
        <div className="DownloadCV">
            <a href="/pdf/cv.pdf" download={fileName}>Download</a>
        </div>
    )
}

