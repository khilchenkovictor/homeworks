import Timer from "./Timer";

function InfoTable({ moves, score, onRestart, isGameActive, onIdle }) {

    return (
        <div className="info">
            <div className="info__score">
                <span className="info__title">Score</span>
                <span className="info__number">{score}</span>
            </div>
            <div className="info__moves">
                <span className="info__title">Moves</span>
                <span className="info__number">{moves}</span>
            </div>
            <div className="info__time">
                <span className="info__title">Time</span>
                <Timer isGameActive={isGameActive} onIdle={onIdle} />
            </div>
            <button className="info__restart" onClick={onRestart}>
                Restart
            </button>
        </div>
    )
}

export default InfoTable;
