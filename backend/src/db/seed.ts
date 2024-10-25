import fs from "node:fs/promises";
import * as path from "node:path";
import { DB } from "@/db/db";
import { ProjectProps } from "@/types";


export const seed = async (db: DB) => {
    const Dpath = path.resolve(__dirname, 'data.json');
    const file = await fs.readFile(Dpath, 'utf-8');
    const projects = JSON.parse(file) as ProjectProps[];

    const insertProjects = db.prepare(`
        INSERT INTO projects (id, title, createdAt, description, category, status, public, tags)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);
    db.transaction(() => {
        for (const project of projects) {
            insertProjects.run(
                project.id,
                project.title,
                project.createdAt,
                project.description,
                project.category,
                project.status,
                JSON.stringify(project.public),
                JSON.stringify(project.tags)
            );
        }
    })()

}