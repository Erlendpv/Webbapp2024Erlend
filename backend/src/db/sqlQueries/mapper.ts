import { DbProjectProps, ProjectProps } from "@/types";
import { DbProjectProps_Zod, ProjectProps_Zod } from "./validate";

export const fromDb = (dbProject: DbProjectProps_Zod): ProjectProps_Zod => {
    return {
        id: dbProject.id,
        title: dbProject.title,
        createdAt: dbProject.createdAt,
        description: dbProject.description,
        category: dbProject.category,
        status: dbProject.status,
        public: JSON.parse(dbProject.public),
        tags: JSON.parse(dbProject.tags)
    }
}
export const toDb = (project: ProjectProps_Zod): DbProjectProps_Zod => {
    return {
        id: project.id,
        title: project.title,
        createdAt: project.createdAt,
        description: project.description,
        category: project.category,
        status: project.status,
        public: JSON.stringify(project.public),
        tags: JSON.stringify(project.tags)
    }
}

export const partialToDb = (project: Partial<ProjectProps>): Partial<DbProjectProps> => {
    return {
        id: project.id,
        title: project.title,
        createdAt: project.createdAt,
        description: project.description,
        category: project.category,
        status: project.status,
        public: JSON.stringify(project.public),
        tags: project.tags?.join(",")
    }
}