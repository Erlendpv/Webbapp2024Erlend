import { DB } from "./db"


export const createProjectsTable =  (db:DB) => {
    db.exec(`
        CREATE TABLE IF NOT EXISTS projects(
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            createdAt TEXT NOT NULL,
            description TEXT NOT NULL,
            category TEXT,
            status TEXT NOT NULL,
            public BOOLEAN NOT NULL,
            tags TEXT NOT NULL
        )`)
}
