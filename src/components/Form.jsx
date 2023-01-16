import React from "react";

export default function Form () {
    const [name, setName] = React.useState("")
    return (
        <form onSubmit={(e) => e.preventDefault()} >
            <input 
                type="text"
                value={name}
                placeholder="Enter username or email"
                onChange={(e) => setName(e.target.value)} 
            />
            <button type="button" className="button">
                Search
            </button>
        </form>
    )
}