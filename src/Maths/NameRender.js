import { useState } from "react";

export function NameRender(){
    const [name, setName] = useState([])

    return (
        <div>
            <h1>{name}</h1>
            <label>Enter name</label>
            <input value={name} onChange={(e) => (setName(e.target.value))}/>
        </div>
    )
}