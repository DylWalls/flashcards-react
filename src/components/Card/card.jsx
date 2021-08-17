import React from 'react';

function Card(props){
    return(
        <div className="card-info">
                 <h1>Card #{props.name}: Category: <i>{props.category}</i></h1>
                 <p/> Question: {props.question}  
                 <p/>Answer: {props.answer} 
                 <p/>Why? {props.explanation}
        </div>
        );
        
}


export default Card;