import React, {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
export default function Form({setCards, cards}) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    function numberTodo() {
        let numberTodo = 0;
        cards.forEach((card) => card.state ? console.log(card.state) : numberTodo++ )
        return numberTodo;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newItem = {
            id: generateUniqueID(),
            title: title,
            description: description,
            state: false
        };

        if (numberTodo() < 10)
            setCards(prev => [...prev, newItem]);
        else
            alert('Tu as trop de chose à faire');
    }

    return (
        <div className="mx-auto w-50 p-3">
            <form className="d-flex flex-column" onSubmit={e => handleSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="titleInput">Titre</label>
                    <input type="text" className="form-control" id="titleInput" aria-describedby="title"
                           placeholder="Enter title" onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="descriptionInput">Description</label>
                    <input type="text" className="form-control" id="descriptionInput"
                           placeholder="Enter description" onChange={e => setDescription(e.target.value)}/>
                </div>
                <button type="submit" className="mx-auto btn btn-primary">Submit</button>
            </form>
        </div>
    )
};