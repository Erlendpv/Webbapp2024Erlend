import { endpoints } from '@/configs/urls';
import {ofetch} from 'ofetch';
import { ProjectProps } from '../Components/Project';

const fetchProject = ofetch(endpoints.projects);

const addProject = async(project: ProjectProps) => {
    try{
        const response = await ofetch(endpoints.projects,{
            method: 'POST',
            body: project,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log("Project added successfully");
        console.log(response.message);
    }catch(error){
        console.log("Error adding project");
        console.error(error);
    }
}
const removeProject = async(project: string) => {
    try{
        const response = await ofetch(endpoints.projects,{
            method: 'DELETE',
            body: project,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log("Project removed successfully");
        console.log(response.message);
    }catch(error){
        console.log("Error removing project");
        console.error(error);
    }
}

export default {fetchProject, addProject, removeProject};