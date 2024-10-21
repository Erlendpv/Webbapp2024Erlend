export type ProjectProps = {
    id: string;
    title: string;
    createdAt: string;
    description: string;
    category?: string;
}

export default function Project({children}: {children: React.ReactNode}){
    return(
        <article>{children}</article>
    )
}