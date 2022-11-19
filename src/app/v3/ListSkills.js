import _dataSkills from "./_dataSkills"
import SkillSection from "./SkillSection"


export default function ListSkills() {
    const skills = _dataSkills()

    return (
        <div className="ListSkills">
            {
                skills.map((skill, index) => {
                    return (
                        <SkillSection item={skill} key={index}/>
                    )
                })
            }
        </div>
    )
}

