import React from 'react';

function Card(props){
    return(
        <div>
             <p className="card-info">
                 <p/>Card #{props.name}: Category: <i>{props.category}</i>
                 <p/> Question: {props.question}  
                 <p/>Answer: {props.answer} 
                 <p/>Why? {props.explanation}
            </p>
        );
    </div>
        
)
}


export default Card;