import {useState, useEffect} from 'react';
import { ProjectProps } from '../Components/Project';
import ProjectsAPI from '../Services/ProjectsAPI';
import { projectsSchema } from '../Helpers/Validate';

export function useProject() {
    const [projectList, setProjectList] = useState<ProjectProps[]> ([])


useEffect(() => {
  const fetchProjectList = async () => {
    try{
        const response = await ProjectsAPI.fetchProject;
        console.log(response)
        setProjectList(projectsSchema.parse(response.data));
    } catch (e) {
        console.error(e);
    }
}
  fetchProjectList()}, []);

const updateProjectList = (prop: Partial<ProjectProps>) => {
  const project: ProjectProps = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    title: prop.title || "",
    description: prop.description || "",
    category: prop.category || "Uncategorized",
    public: prop.public || false,
     status:prop.status || "",
      tags:[]
    };
    setProjectList(prev => [...prev, project]);
    ProjectsAPI.addProject(project);
}
const deleteProject = (projectId: string) => {
  setProjectList(projectList.filter((project) => project.id !== projectId));
  ProjectsAPI.removeProject(projectId);
}

const projectsByCategory = projectList.reduce((totals, project) => {
    const category = project.category || "Uncategorized";
    totals[category] = (totals[category] || 0) + 1;
    return totals;
  }, {} as { [category: string]: number });

return {projectList, updateProjectList, deleteProject, projectsByCategory};

}
export default useProject;