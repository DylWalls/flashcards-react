import React from 'react';

function Card(deck){
    return(
        <div>
             <p className="card-info">
                 <p/>Card #{deck.name}: Category: <i>{deck.category}</i>
                 <p/> Question: {deck.question}  
                 <p/>Answer: {deck.answer} 
                 <p/>Why? {deck.explanation}
            </p>
        );
    </div>
        
)
}


export default Card;