import Experiences from "@/Features/Experiences/Components/Experiences";
import Header from "./Header";
import Contact from "@/Features/Contact/Components/Contact";
import Empty from "./Empty";
import Experience from "@/Features/Experiences/Components/Experience";
import {student} from "@/configs/student";
import { PropsWithChildren } from "react";

export function Layout({children}: PropsWithChildren){

    return (
        <>
      <Header student={student.name} degree={student.degree} points={student.points} />
      <Experiences>
        <h2>My experiences</h2>
        <Empty data={student}>
          {student.experiences.map((exp:string, index:any) => (
            <Experience key={index}experience={exp}></Experience>))}
        </Empty>
      </Experiences>
      <Contact email={student.email} />
      {children}
    </>
    )

}