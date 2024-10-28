import { DbProjectProps, ProjectProps } from "@/types";

export const fromDb = (dbProject: DbProjectProps): ProjectProps => {
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
export const toDb = (project: ProjectProps): DbProjectProps => {
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
