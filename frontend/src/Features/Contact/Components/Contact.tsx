import { useState } from "react";

type ContactProps = {
    email: string;
}

export default function Contact(email : ContactProps){
    const [name, setName] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        if(e.target.id === 'name'){
            setName(e.target.value);
        } else {
            setMessage(e.target.value);
        }
    }
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!name || !message){
            return;}
        console.log(name);
        console.log(message);
        setName("");
        setMessage("");

    }

    return(
        <div className="contact-form">
            <h2>Contact me</h2>
            <button type="button" onClick={() => alert(email)}>Vis epost adresse</button>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name</label>
                <input type="text" id="name" required placeholder="your name" onChange={handleChange} value={name} />
                <label htmlFor="message">Your message</label>
                <textarea name="message" id="message" placeholder="Message here...." onChange={handleChange} value={message}></textarea>
                <button type="submit">send message</button>
            </form>
        </div>
    )
}