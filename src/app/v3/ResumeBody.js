import BodyLeft from "./BodyLeft"
import BodyRight from "./BodyRight"


export default function ResumeBody() {
    return (
        <div className="ResumeBody">
            <div className="Inner d-flex">
                <BodyLeft/>
                <BodyRight/>
            </div>
        </div>
    )
}
