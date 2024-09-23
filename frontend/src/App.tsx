import { useEffect, useState } from "react"
import Contact from "./Components/Contact"
import Empty from "./Components/Empty"
import Experience from "./Components/Experience"
import Experiences from "./Components/Experiences"
import Header from "./Components/Header"
import { ProjectProps } from "./Components/Project"
import Projects from "./Components/Projects"
import CreateProject from "./Components/CreateProject"


function App() {
  const student = {
    name: 'Halgeir Geirson',
    degree: 'Bachelor IT',
    points: 180,
    experiences: [
      'Figma UI for customer X',
      'Website for customer Y'],
    email: 'student@hiof.no'
  }

   
const [projectList, setProjectList] = useState<ProjectProps[]> ([])
const fetchProjectList = async () => {
  const response = await fetch('http://localhost:3999/projects');
  const data = await response.json();
  console.log(data)
  setProjectList(data.projectList);
}
useEffect(() => {fetchProjectList()}, []);

const updateProjectList = (prop: {title: string, description: string}) => {
  const project = {id: crypto.randomUUID(), ...prop};
    setProjectList((prev) => [...prev, project]);
}
const deleteProject = (projectId: string) => {
  setProjectList(projectList.filter((project) => project.id !== projectId));


  
}
  return (
    <div>
      <Header student={student.name} degree={student.degree} points={student.points} />
      <Experiences>
        <h2>My experiences</h2>
        <Empty data={student}>
          {student.experiences.map((exp, index) => (
            <Experience key={index}experience={exp}></Experience>
          ))}
        </Empty>
      </Experiences>
      <Contact email={student.email} />
      <h2>Create projects</h2>
      <CreateProject updateProjectList={updateProjectList} />
      <h2>Current projects</h2>
      <Projects projectList={projectList} deleteProject={deleteProject}/>
    </div>
  )
}

export default App