import {z} from 'zod';

export {projectSchema, projectsSchema}

const projectSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    createdAt: z.string().datetime(),
    category: z.string().optional(),
    status: z.string(),
    public: z.boolean(),
    tags: z.string().array()

})
const projectsSchema = z.array(projectSchema)