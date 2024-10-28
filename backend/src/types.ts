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
export type Sucsess<T> = {
    success: true,
    status: number,
    data: T
}

export type Result<T> = {
    | {
        success: true,
        status: number,
        data: T
    }
}