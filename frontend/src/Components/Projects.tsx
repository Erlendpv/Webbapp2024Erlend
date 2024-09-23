import Empty from "./Empty";
import Project, { ProjectProps } from "./Project";


export default function Projects({projectList, deleteProject} : { projectList: ProjectProps[], deleteProject: Function}){
    const projectsByCategory = projectList.reduce((totals, project) => {
        const category = project.category || "Uncategorized";
        totals[category] = (totals[category] || 0) + 1;
        return totals;
      }, {} as { [category: string]: number });
    
    return(
        <Empty data={(projectList)}>
            {projectList.map((p, index) => (
                    <Project key={index}>
                        <h2>{p.title}</h2>
                        <p>{p.description}</p>
                        <p>Category: {p.category ? p.category : "no catagory exists"}</p>
                        <button type="button" onClick={() => deleteProject(p.id)}>Delete project</button>
                    </Project>
                    
        ))}
        <h2>Total projects per category:</h2>
      <ul>
        {Object.entries(projectsByCategory).map(([category, total]) => (<li key={category}>{category}: {total}</li>))}
      </ul>
        </Empty>
    )
        
}