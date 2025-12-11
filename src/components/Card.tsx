import {useEffect, useState} from "react";

type CardType = {
    question: string;
    answer: string;
    points: number
}

const Card = () => {
    const [json, setJson] = useState<CardType[]>([]);
    const [cardIdx, setCardIdx] = useState(0);

    useEffect(() => {
        fetch("./public/cards.json")
            .then((res) => res.json())
            .then(json => setJson(json));
    }, []);

    useEffect(() => {
        const input = document.getElementById("btnControl") as HTMLInputElement;
        if (input == null) return;
        input.checked = false;
    }, [cardIdx]);

    if (json.length === 0) return (<></>);

    return (
        <main>
            <input type="checkbox" id="btnControl" style={{display: 'none'}}/>
            <label htmlFor="btnControl">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front" style={{
                            backgroundColor: (json[cardIdx].points > 0 ? "#66CB92" : json[cardIdx].points < 0 ? "#FF9396" : "white"),
                            color: (json[cardIdx].points === 0 ? "black" : "white")
                        }}>
                            <p>{json[cardIdx].question}</p>
                        </div>
                        <div className="flip-card-back">
                            <div className="points-div" style={{
                                backgroundColor: (json[cardIdx].points > 0 ? "#66CB92" : json[cardIdx].points < 0 ? "#FF9396" : "white"),
                                color: (json[cardIdx].points === 0 ? "black" : "white")
                            }}>
                                <p className="points-p">{json[cardIdx].points}</p>
                            </div>
                            <div className="back-main">
                                <div className="answer-div">
                                    <p className="answer-p">{json[cardIdx].answer}</p>
                                </div>
                                <div className="buttons-div">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="correct-td">
                                                    <p>Eltaláltam</p>
                                                    <button onClick={() => setCardIdx(prev => (prev + 1) % json.length)}>
                                                        <i className="fa-regular fa-circle-check"></i>
                                                    </button>
                                                </td>
                                                <td className="incorrect-td">
                                                    <p>Nem sikerült</p>
                                                    <button onClick={() => setCardIdx(prev => (prev + 1) % json.length)}>
                                                        <i className="fa-regular fa-circle-xmark"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="progress">
                    <p className="progress-bar">{cardIdx + 1} / {json.length}</p>
                    <progress value={cardIdx + 1} max={json.length}></progress>
                </div>

                <div className="more-buttons">
                    <button onClick={() => {setCardIdx(0)}}>
                        Új gyakorlás indítása
                    </button>
                </div>
            </label>
        </main>
);
};

export default Card;