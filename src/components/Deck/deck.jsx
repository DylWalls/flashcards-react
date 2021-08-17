import React from 'react';


function Deck(props){
    return(
        <div>
             <p className="deck-info">
                 <p/>Deck{props.name} Category: <i>{props.category}</i>
            </p>
        </div>
        );
    }
export default Deck;