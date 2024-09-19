export type ProjectProps = {
    id: string;
    title: string;
    description: string;
}
type Props = {
    props: ProjectProps;
}

export default function Project({props}: Props){
    const {id = "", title = "", description = ""} = props;  
    return(
        <article>
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    )
}