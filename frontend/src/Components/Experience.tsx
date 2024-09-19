type ExperienceProp ={
    experience: string;
}

export default function Experience(prop: ExperienceProp){
    const {experience = ""} = prop;
    return(
        <p>{experience}</p>
    )
}
