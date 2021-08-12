import React from 'react';




function Card(props){

    return(
         <div>
             {app.state.deck((deck, index) => (
                <p className="card-info"key={index}>
                     <p/>Card #{deck.name}: Category: <i>{deck.category}</i>
                     <p/> Question: {deck.question}  
                     <p/>Answer: {deck.answer} 
                     <p/>Why? {deck.explanation}
                </p>
                )
            )}
        </div>
    )
 }

 export default Card;