import { DB } from "./db";
import { seed } from "./seed";
import { createProjectsTable } from "./tables";

export const setup = async (db: DB) => {
    await createProjectsTable(db);
    await seed(db);
}