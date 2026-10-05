
function GameCard({ card, onCardClick }) {

    const Icon = card.icon;

    return (
        <div
            className={`card ${card.isFlipped || card.isMatched
                    ? "card--flipped"
                    : ""
                }`}
            onClick={() => onCardClick(card)}
        >
            <div className="card__front">
            </div>

            <div className="card__back">
                <Icon className="card__icon" />
            </div>
        </div>
    );
}

export default GameCard;