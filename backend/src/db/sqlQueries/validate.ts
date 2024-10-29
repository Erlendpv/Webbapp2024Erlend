import { z } from "zod";

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  createdAt: z.string(),
  category: z.string(),
  status: z.string(),
  public: z.boolean(),
  tags: z.string().array(),
});

export const projectFromDbSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  createdAt: z.string(),
  category: z.string(),
  status: z.string(),
  public: z.string(),
  tags: z.string(),
});


export const updateProjectSchema = z.object({id: z.string(), project: z.object({
  id: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  createdAt: z.string().optional(),
  category: z.string().optional(),
  status: z.string().optional(),
  public: z.boolean().optional(),
  tags: z.string().array().optional(),
})})
export type ProjectProps_Zod = z.infer<typeof projectSchema>;
export type UpdateProjectProps = z.infer<typeof updateProjectSchema>;
export type DbProjectProps_Zod = z.infer<typeof projectFromDbSchema>;

export const validateUpdateProject = (data: unknown) => {
  return updateProjectSchema.safeParse(data);
}
export const validateCreateProject = (data: unknown) => {
  return projectSchema.safeParse(data);
}