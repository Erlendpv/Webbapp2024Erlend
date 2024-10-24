import { useState } from "react";
 import useProject from "./useProject";

export function UseForm(){
    const {updateProjectList} = useProject();
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [isPublicProject, setIsPublicProject] = useState<boolean>(false);
    const [category, setCategory] = useState<string>("");
    const [status, setStatus] = useState<string>("");
    const [tags, setTags] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        if(e.target.id === 'title'){
            setTitle(e.target.value);
        } else {
            setDescription(e.target.value);
        }
    }
    const handlePublic = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsPublicProject(e.target.checked);
    }
    const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(e.target.value);
    }
    const handleStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value);
    }
    const handleTags = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTags(e.target.value.split(","));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!title || !description){
            return;
        }
        updateProjectList({title: title, description: description, public: isPublicProject, category: "Uncategorized"});
        setTitle("");
        setDescription("");
        setIsPublicProject(false);
    }
    return{title, description, isPublicProject, category, status, tags, handleTags, handleStatus, handleCategory, handleChange, handlePublic, handleSubmit}

}
export default UseForm;