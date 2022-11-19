import _dataExperiences from "./_dataExperiences"
import Experience from "./Experience"


export default function ListExperiences() {
    const experiences = _dataExperiences()

    return (
        <div className="ListExperiences">
            {
                experiences.map((exp, index) => {
                    return (
                        <Experience key={index} item={exp}/>
                    )
                })
            }
        </div>
    )
}
