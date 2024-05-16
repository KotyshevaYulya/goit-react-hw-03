import css from "./App.module.css"
import { useState, useEffect } from "react";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../CotactForm/ContactForm";
import contacts from "../../contacts.json"


export default function App() {

    const [filter, setFilter] = useState('');

    const [value, setValue] = useState(() => {
        const savedContacts = window.localStorage.getItem("saved-contacts");

        if (savedContacts !== null) {
            return JSON.parse(savedContacts);
        }
        return contacts;
    });

    const handleChangeInputValue = (newValue) => {
        setFilter(newValue);
    }

    const visibleContacts = value.filter(obj => obj.name.toLowerCase().includes(filter.toLowerCase()));

    const handleAddUser = (newUser) => {
        setValue([...value, newUser]);
    };

    const deleteContact = (idToDelete) => {
       const updatedObjects = value.filter(obj => obj.id !== idToDelete);
        setValue(updatedObjects);
    };

    useEffect(() => {
        localStorage.setItem("saved-contacts", JSON.stringify(value));
    }, [value]);

    return (
        <div className={css.container}>
            <h1>Phonebook</h1>
            <ContactForm onAdd={handleAddUser} />
            <SearchBox text={filter} onType={handleChangeInputValue} />
            < ContactList visibleContacts={visibleContacts} deleteContact={deleteContact} />
        </div>
)
};
