import UseForm from "../hooks/useForm";


export default function CreateProject() {
    const { title, description, handleChange, handleSubmit, handlePublic, handleTags, handleCategory, handleStatus, isPublicProject, tags} = UseForm();
    

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" value={title} onChange={handleChange} />
            <label htmlFor="">Public Availability:</label>
            <input type="checkbox" name="public" id="public" onChange={handlePublic} checked={isPublicProject} />
            <label htmlFor="">Category</label>
            <input name="category" id="category" onChange={handleCategory}></input>
            <label htmlFor="">Status</label>
            <input name="status" id="status" onChange={handleStatus}></input>
            <label htmlFor="">Tags</label>
            <input name="tags" id="tags" value={tags.join(", ")} placeholder="tagnr1, tagnr2, tagnr3" onChange={handleTags}></input>
            <label htmlFor="">Description</label>
            <textarea name="description" id="description" value={description} onChange={handleChange}></textarea>
            <button type="submit">Create project</button>
        </form>
    )
}