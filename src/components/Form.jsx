import React from "react";

export default function Form ({filterResults}) {
    const [name, setName] = React.useState("")
    return (
        <form onSubmit={(e) => e.preventDefault()} >
            <input 
                type="text"
                value={name}
                placeholder="Enter username or email"
                required
                onChange={(e) => setName(e.target.value)} 
            />
            <button 
                type="button" 
                className="button" 
                onClick={() => {
                    if(name) filterResults(name)
                    }
                } 
            >
                Search
            </button>
        </form>
    )
}