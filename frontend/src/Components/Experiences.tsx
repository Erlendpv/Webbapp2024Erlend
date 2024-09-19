import Experience from "./Experience";

type ExperiencesProps = {
    experienceOne: string;
    experienceTwo: string;
}

export default function Experiences(props : ExperiencesProps){
    const {experienceOne = "", experienceTwo = ""} = props;
    return(
        <div>
            <Experience experience={experienceOne} />
            <Experience experience={experienceTwo} />
        </div>
    )
}