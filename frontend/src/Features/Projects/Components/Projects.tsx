import Empty from "@/Components/Empty";
import CreateProject from "./CreateProject";
import useProject from "../hooks/useProject";
import { FormateDate } from "../Helpers/FormatDate";
import Project from "./Project";



export default function Projects(){
    const {projectList, updateProjectList, deleteProject, projectsByCategory} = useProject();
    return(
        <>
        <h2>Create project</h2>
        <CreateProject updateProjectList={updateProjectList}/>
        <h2>Current projects:</h2>
        <Empty data={(projectList)}>
            {projectList.map((p, index) => (
                    <Project key={index}>
                        <h2>{p.title}</h2>
                        <p>{p.description}</p>
                        <p>{FormateDate(p.createdAt)}</p>
                        <p>Category: {p.category ? p.category : "no catagory exists"}</p>
                        <button type="button" onClick={() => deleteProject(p.id)}>Delete project</button>
                    </Project>
                    
        ))}
        <h2>Total projects per category:</h2>
      <ul>
        {Object.entries(projectsByCategory).map(([category, total]) => (<li key={category}>{category}: {total}</li>))}
      </ul>
        </Empty>
        </>
    )
        
}