type HeaderProps = {
    student: string;
    degree: string;
    points: number;
}

export default function Header(props : HeaderProps) {
    const { student = "student", degree = "degree", points = 0} = props
    return (
        <header>
            <h1>{student}</h1>
            <p>{degree} {points} studiepoeng</p>
        </header>
    )
}