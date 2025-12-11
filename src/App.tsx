import Card from "./components/Card.tsx";
import NewCard from "./components/NewCard.tsx";
import {useState} from "react";

const App = () => {
    const [newCardPage, setNewCardPage] = useState<boolean>(false);

    if (newCardPage) return (
        <>
            <NewCard/>
            <button onClick={() => {
                setNewCardPage(false);
            }} className="new-card-button">
                Új gyakorlás indítása
            </button>
        </>
    )
    else return (
        <>
            <Card/>
            <button onClick={() => {
                setNewCardPage(true);
            }} className="new-card-button">
                Új kártyák hozzáadása
            </button>
        </>
    )
}
export default App
