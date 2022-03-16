import {useState} from "react";

export default function Card({cards, setCards, title, description, id}) {

    const [state, setState] = useState(false);

    return (
        <div className={`card mb-5 mx-auto border ${state ? "border-success" : "border-warning"}`} style={{maxWidth: "400px"}} onClick={() => setState(state ? false : true)}>
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{description}</p>
                <button type="button" className="btn btn-danger" onClick={() => setCards(cards.filter((tab) => tab.id !== id))}>Delete</button>
            </div>
        </div>
    )
}