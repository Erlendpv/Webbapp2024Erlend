import {z} from 'zod';

export {projectSchema, projectsSchema}

const projectSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    createdAt: z.string().datetime(),
    category: z.string().optional()

})
const projectsSchema = z.array(projectSchema)