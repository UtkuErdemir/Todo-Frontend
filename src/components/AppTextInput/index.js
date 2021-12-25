import React from 'react'
import './AppTextInput.css';

function AppTextInput({placeholder, changeValue, value}) { 
    const shownPlaceholder = placeholder || "Please fill the input.";
    return (
        <input aria-label="app-text-input" onChange={(e)=>changeValue(e.target.value)} value={value} placeholder={shownPlaceholder}></input>
    )
}

export default AppTextInput;
