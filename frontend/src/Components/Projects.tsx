import Project, { ProjectProps } from "./Project";


export default function Projects(){
    const projectList : ProjectProps[] = [
        {
            id: "1",
            title: "Project 1",
            description: "This is project 1"
        },
        {
            id: "2",
            title: "Project 2",
            description: "This is project 2"
        },
        {
            id: "3",
            title: "Project 3",
            description: "This is project 3"
        },
        {
            id: "4",
            title: "Project 4",
            description: "This is project 4"
        }
    ]
    return(
        projectList.map((p, index) => (
            <Project key={index} props={p}/>
        )
    ))
}