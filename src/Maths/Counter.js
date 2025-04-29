import { Component, useState } from "react";

export const Counter = () => {
    const [infor, setInfor] = useState(
        [{
            name: 'hello',
            age: 9
        }]
    );
    return (
        <div>
            {infor.map((item, index) => (
                <>
                    <h1 key={index}>{item.name}</h1>
                    <h1 key={index}>{item.age}</h1>
                
                </>
            ))}
            
        </div>
    )
}