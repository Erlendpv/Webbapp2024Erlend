import { DbProjectProps, ProjectProps } from "@/types";
import { DB } from "../db";
import { fromDb, partialToDb, toDb } from "./mapper";
import { run } from "node:test";
import { ProjectProps_Zod, UpdateProjectProps } from "./validate";

//CRUD
export const projectSQL = (db: DB) =>{
    const createAProjectDb = async (data: ProjectProps_Zod)=>{
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

    const updateAProjectDb = async (project: UpdateProjectProps) =>{
        try {
            const data = partialToDb(project)
            const query = db.prepare(`
                update projects set 
                title = coalesce(?, title),
                createdAt = coalesce(?, createdAt),
                description = coalesce(?, description),
                category = coalesce(?, category),
                status = coalesce(?, status),
                public = coalesce(?, public),
                tags = coalesce(?, tags)
                where id = ?`)
            query.run(
                data.title,
                data.createdAt,
                data.description,
                data.category,
                data.status,
                data.public,
                data.tags,
                project.id)
                return {sucsess:true, status: 201, data: project}
        } catch (error) {
            console.log(error);
        }
    }
    const getAllProjectsDb = async () =>{
        try {
            const query = db.prepare(`select * from projects`)
            const response = query.all() as DbProjectProps[];
            return {succses:true, status: 201, data:response.map((project)  => fromDb(project)) as ProjectProps_Zod[]}
        } catch (error) {
            console.log(error);
            return {succses:false, status: 500, message: "internal server error"}
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