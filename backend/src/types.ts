export type ProjectProps = {
    id: string;
    title: string;
    createdAt: string;
    description: string;
    category?: string;
    status: string;
    public: boolean;
    tags: string[];
}

export type DbProjectProps = {
    id: string;
    title: string;
    createdAt: string;
    description: string;
    category?: string;
    status: string;
    public: string;
    tags: string;
}