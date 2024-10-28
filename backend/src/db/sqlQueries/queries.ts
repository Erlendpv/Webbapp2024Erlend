import { DbProjectProps, ProjectProps } from "@/types";
import { DB } from "../db";
import { fromDb, toDb } from "./mapper";
import { run } from "node:test";

//CRUD
export const projectSQL = (db: DB) =>{
    const createAProjectDb = async (data: ProjectProps)=>{
        try{
        const project = toDb(data)
        const query = db.prepare(`
            insert into projects (id, title, createdAt, description, category, status, public, tags)
            values (?, ?, ?, ?, ?, ?, ?, ?)`)
            query.run(
                project.id,
                project.title,
                project.createdAt,
                project.description,
                project.category,
                project.status,
                project.public,
                project.tags)
                return {status: 201, data: await getAllProjectsDb()}
    }catch(error){
        console.log(error);
    }
    }
    
    const getAProjectDb = async (id: string) =>{
        try{
            const query = db.prepare(`select * from projects where id = ?`)
            const response = query.get(id) as DbProjectProps;
            return fromDb(response) as ProjectProps
        } catch(error){
            console.log(error);
        }
    }

    const deleteAProjectDb = async (id: string) =>{
        try {
            const query = db.prepare(`delete from projects where id = ?`)
            query.run(id)
        } catch (error) {
            console.log(error);
        }
    }

    const updateAProjectDb = async (project: ProjectProps) =>{
        try {
            const query = db.prepare(`update projects set title = ?, createdAt = ?, description = ?, category = ?, status = ?, public = ?, tags = ? where id = ?`)
            query.run(
                project.title,
                project.createdAt,
                project.description,
                project.category,
                project.status,
                project.public,
                project.tags,
                project.id)
                return "Project updated successfully"
        } catch (error) {
            console.log(error);
        }
    }
    const getAllProjectsDb = async () =>{
        try {
            const query = db.prepare(`select * from projects`)
            const response = query.all() as DbProjectProps[];
            return response.map((project)  => fromDb(project)) as ProjectProps[]
        } catch (error) {
            console.log(error);
    }
}  
     return {
        createAProjectDb,
        getAProjectDb,
        deleteAProjectDb,
        updateAProjectDb,
        getAllProjectsDb}
}
export type ProjectRepository = ReturnType<typeof projectSQL>