const NewCard = () => {
    return (
        <main className="newcard-main">
            <h1>Új kártya létrehozása</h1>

            <div>
                <div>
                    <div>
                        <p>Kérdés</p>
                        <textarea placeholder="Kérdés placeholder..."/>
                    </div>
                    <div>
                        <p>Válasz</p>
                        <textarea placeholder="Válasz placeholder..."/>
                    </div>
                </div>

                <button>
                    <i className="fa-solid fa-plus"></i>
                    Hozzáad
                </button>
            </div>
        </main>
    );
};

export default NewCard;