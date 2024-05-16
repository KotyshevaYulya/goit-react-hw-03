import { useId } from "react";
import { useState } from "react";
import css from "./SearchBox.module.css"

export default function SearchForm({ text, onType }) {
    const handleChange = (event) => {
        onType(event.target.value)
    };

    const fieldId = useId();
    return (
        <div className={css.searchContainer}>
            <label htmlFor={fieldId} className={css.searchForm}>
                Find contact by name
                <input type="text" value={text} onChange={handleChange} id={fieldId}/>
            </label>
        </div>
    )
}