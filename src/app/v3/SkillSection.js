export default function SkillSection({item}) {
    const {sub_title, list} = item

    return (
        <div className="SkillSection">
            <div className="SubTitle">{sub_title}</div>
            <ul>
                {
                    list.map((text, index) => {
                        return (
                            <li key={index}>{text}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

