import { ProjectProps } from "@/types";
import { ProjectRepository, projectSQL } from "./queries";
import db from "../db";

export const createProjectService = (projectRepo: ProjectRepository) =>{
    const createAProjectDb = async (project: ProjectProps) =>{
        return projectRepo.createAProjectDb(project)
    }
    const getAProjectDb = async (id: string) =>{
        return projectRepo.getAProjectDb(id)
    }
    const deleteAProjectDb = async (id: string) =>{
        return projectRepo.deleteAProjectDb(id)
    }
    const updateAProjectDb = async (id: string, project: Partial<ProjectProps>) =>{
        return projectRepo.updateAProjectDb(id, project)
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