import React, { useState } from "react";


const Appp =() =>{

    const [name, setName] = useState();
    const [fullname, setFullname] = useState();

    const inputEvent = (event) => {
        setName(event.target.value);

    };

    const formSubmit = () => {
        setFullname(name);

    };
    
    return (
    <>
        <div>
            <h1>hello {fullname}</h1>
            <input type= "text" placeholder="enter your name" onChange = {inputEvent} />
            <button onClick={formSubmit}>click me 👍</button>
        </div>
    </>
    );
};

export default Appp;