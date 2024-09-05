import './style.css'

const jsonGet = async () => {
    try {
        const response = await fetch("http://localhost:3999")
        const data = await  response.json()
        console.log(data)
        return data;
    } catch (error) {
        console.error(error)
    }  
}

const projectList = async () => {
    let projectListHTML = "";
    const data = await jsonGet();


for (const p of data){
    projectListHTML +=
    `<li>
             <article class="project-card">
                <h2 class="card-title">${p.projectName}</h2>
            </article>
    </li>
    `
    document.getElementById("project-list").innerHTML = projectListHTML
}}

projectList()

let projectArray = []

const submit = async (event) => {
    event.preventDefault()
    const form = event.target;
    const projectAdd = {
        projectName: form["project-name"].value,
        projectDescription: form["project-description"].value,
        projectUrl: form["github-url"].value,
        projectStartDate: form["project-start-date"].value,
    };
    
    try {
        const response = await fetch("http://localhost:3999", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(projectAdd)

        })  
        if (response.status === 201) {
            projectList()
            console.log("new project added") 
        } 
    } catch (error) {
        console.error(error)  
    }
    form.reset();
    

}
document.getElementById("submitForm").addEventListener("submit", submit)