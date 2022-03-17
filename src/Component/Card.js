import {useState} from "react";


export default function Card({cards, setCards, title, description, id}) {

    const [state, setState] = useState(false);

    function toggleCardState() {
        cards.forEach((card) => {
            if (card.id == id) {
                card.state ? card.state = false : card.state = true;
                setState(card.state)
            }
        })
        return cards
    }

    return (
        <div className={`card mb-5 mx-auto border ${state ? "border-success" : "border-warning"}`} style={{maxWidth: "400px"}} onClick={() => setCards(toggleCardState())}>
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{description}</p>
                <button type="button" className="btn btn-danger" onClick={() => { setCards(cards.filter((tab) => tab.id !== id)); console.log(cards)}}>Delete</button>
            </div>
        </div>
    )
}