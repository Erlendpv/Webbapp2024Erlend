type ContactsProps = {
    email: string;
}

export default function Contacts(props : ContactsProps){
    const {email = ""} = props;
    return(
        <div>
            <p>{email}</p>
        </div>
    )
}