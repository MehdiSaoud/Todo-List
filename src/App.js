import React, {useState} from "react";
import Card from "./Component/Card";
import Form from "./Component/Form";
import {CardList} from "./Data/CardList";

export default function App() {

    const [cards, setCards] = useState(CardList);

    return (
        <>
            <Form setCards={setCards}/>
            <div className='row row-cols-2 row-cols-md-4 g-2 p-5'>
                {cards.map(
                    card => (
                        <Card cards={cards} setCards={setCards} title={card.title} description={card.description} state={card.state} key={card.id} id={card.id}/>
                    )
                )}
            </div>
        </>
    )
}
