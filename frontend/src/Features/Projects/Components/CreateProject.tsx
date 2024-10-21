import { useState } from "react";

export default function CreateProject({updateProjectList}: {updateProjectList: Function}) {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        if(e.target.id === 'title'){
            setTitle(e.target.value);
        } else {
            setDescription(e.target.value);
        }
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!title || !description){
            return;
        }
        updateProjectList({title: title, description: description});
        setTitle("");
        setDescription("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" value={title} onChange={handleChange} />
            <label htmlFor="">Discription</label>
            <textarea name="description" id="description" value={description} onChange={handleChange}></textarea>
            <button type="submit">Create project</button>
        </form>
    )
}