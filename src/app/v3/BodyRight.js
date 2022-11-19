import Education from "./Education"
import Achievements from "./Achievements"
import Skills from "./Skills"


export default function BodyRight() {
    return (
        <div className="BodyRight col">
            <Education/>
            <Achievements/>
            <Skills/>
        </div>
    )
}
