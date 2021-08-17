import React from 'react';
import Deck from '../Deck/deck';


function DeckViewer(props){
    return(
        <div className="row row-spacer">
        <div className="col-md-4">
            <button onClick={() => props.previousDeck()}>Previous Category</button>
        </div>
        <div className="col-md-4">
            <Deck deck={props.deck}/>
        </div>
        <div className="col-md-4 button">
            <button onClick={() => props.nextDeck()}>Next Category</button>
        </div>
    </div>
    )
}

export default DeckViewer;