import { serve } from "@hono/node-server";
import { Hono } from "hono";
import {cors} from "hono/cors";
import {serveStatic} from "@hono/node-server/serve-static";
import {readFile, writeFile} from "fs/promises";

// om jeg skal kjøre serveren så må jeg bruker "node server.js" i terminalen
const app = new Hono();

app.use("/*", cors());
app.use("/statics", serveStatic({root: ":/"}));
app.get("/", async (c) => {
    const data = await readFile("./projectFile.json", "utf-8");
    return c.json(JSON.parse(data));
});
app.post("/", async (c) => {
    const projectNew = await c.req.json();
    const data = await readFile("./projectFile.json");
    let project = await JSON.parse(data);
    project.push({
        id: project.lenght,
        createdAt: new Date(),
        ...projectNew
    });
    await writeFile("./projectFile.json", JSON.stringify(project, null, 2))
        console.log("new project added");
        console.log({
            id: project.lenght - 1,
            createdAt: new Date(),
            ...projectNew
    });
    return c.json(project, {status: 201});
});
const port = 3999;

console.log(`Server is running on port ${port}`);
serve({
    fetch: app.fetch,
    port
})