import {useState, useEffect} from 'react';
import { ProjectProps } from '../Components/Project';
import ProjectsAPI from '../Services/ProjectsAPI';
import { projectsSchema } from '../Helpers/Validate';

export function useProject() {
    const [projectList, setProjectList] = useState<ProjectProps[]> ([])

    const fetchProjectList = async () => {
        try{
            const response = await ProjectsAPI.fetch;
            const data = await response;
            console.log(projectsSchema.safeParse(data.projectList))
            console.log(data)
            setProjectList(projectsSchema.parse(data.projectList));
        } catch (e) {
            console.error(e);
        }
    
    
    
}
useEffect(() => {fetchProjectList()}, []);

const updateProjectList = (prop: {title: string, description: string}) => {
  const project = {id: crypto.randomUUID(),createdAt: new Date().toISOString(), ...prop};
    setProjectList((prev) => [...prev, project]);
}
const deleteProject = (projectId: string) => {
  setProjectList(projectList.filter((project) => project.id !== projectId));
}

const projectsByCategory = projectList.reduce((totals, project) => {
    const category = project.category || "Uncategorized";
    totals[category] = (totals[category] || 0) + 1;
    return totals;
  }, {} as { [category: string]: number });

return {projectList, updateProjectList, deleteProject, projectsByCategory};

}
export default useProject;