import Contact from "../Contact/Contact";

export default function ContactList({ visibleContacts, deleteContact }) {

    return (
        <>
            <ul>
            {visibleContacts.map((contact) =>(
                <li key={contact.id}>
                    <Contact contact={contact} deleteContact={deleteContact} />
                </li>
            ))}
        </ul>
        </>
)
}