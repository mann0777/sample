import React from "react";

function Card(props){
    return(<>
        <div>
            <div>
                <h1>{props.sname}</h1>
                <a href={props.link} target="_blank">
                    <button>click here</button>
                </a>
            </div>
        </div>
        </>);
}

export default Card;