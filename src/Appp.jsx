import React, { useEffect, useState } from "react";




const Appp =() =>{
    const[num, setNum] = useState(0);
    const [text, setText] = useState("time clicked");
    useEffect(()=>{
        document.title = num; 
    });

    useEffect(()=>{
        document.title = {num}, text; 
    });





    return (
        <button onClick={()=> {setNum(num + 1);}}>click me {num}</button>
    );

};

export default Appp;