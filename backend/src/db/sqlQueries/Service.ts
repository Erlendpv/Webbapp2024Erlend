import { ProjectProps } from "@/types";
import { ProjectRepository, projectSQL } from "./queries";
import db from "../db";
import { UpdateProjectProps, validateCreateProject } from "./validate";

export const createProjectService = (projectRepo: ProjectRepository) =>{
    const createAProjectDb = async (project: ProjectProps) =>{
        if(!validateCreateProject(project).success){
            return {status: 400, message: "invalid data"}
        }
        return projectRepo.createAProjectDb(project)
    }
    const getAProjectDb = async (id: string) =>{
        return projectRepo.getAProjectDb(id)
    }
    const deleteAProjectDb = async (id: string) =>{
        return projectRepo.deleteAProjectDb(id)
    }
    const updateAProjectDb = async (id: string, project: Partial<ProjectProps>) =>{
        console.log({id,project})
        if(!validateCreateProject({id, project}).success){
            return {status: 400, message: "invalid data"}
        }
        return projectRepo.updateAProjectDb({id, project})
    }
    const getAllProjectsDb = async () =>{
        return projectRepo.getAllProjectsDb()
    }
    return {
        createAProjectDb,
        getAProjectDb,
        deleteAProjectDb,
        updateAProjectDb,
        getAllProjectsDb
    }
}
export const projectService = createProjectService(projectSQL(db))
export type ProjectService = ReturnType<typeof createProjectService>