import { useState, useEffect } from "react";
import Title from "./components/Title";
import InfoTable from "./components/InfoTable";
import GameCard from "./components/GameCard";
import { cardIcons } from "./data/gameData";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/styles.scss";


function App() {

  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState(0);

  function createCards() {
    const cards = [...cardIcons, ...cardIcons];

    return cards
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({
        ...card,
        uniqueId: index,
        isFlipped: false,
        isMatched: false,
      }));
  }

  useEffect(() => {
    setCards(createCards());
    setIsGameActive(true);
  }, []);

  useEffect(() => {
    if (matchedPairs === cardIcons.length && cardIcons.length > 0) {
      setIsGameActive(false);
      toast.success(`Ви перемогли. Ваш рахунок: ${score}/80`, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  }, [matchedPairs, score]);

  const handleCardClick = (card) => {

    if (
      flippedCards.length === 2 ||
      card.isFlipped ||
      card.isMatched ||
      !isGameActive
    ) {
      return;
    }

    const newFlippedCards = [...flippedCards, card];
    setFlippedCards(newFlippedCards);

    setCards((prevCards) =>
      prevCards.map((currentCard) =>
        currentCard.uniqueId === card.uniqueId
          ? { ...currentCard, isFlipped: true }
          : currentCard
      )
    );

    if (newFlippedCards.length === 2) {
      setMoves((prev) => prev + 1);

      const [firstCard, secondCard] = newFlippedCards;

      if (firstCard.id === secondCard.id) {
        setMatchedPairs((prev) => prev + 1);
        setScore((prev) => prev + 10);
        setFlippedCards([]);

        setCards((prevCards) =>
          prevCards.map((currentCard) =>
            currentCard.id === firstCard.id
              ? { ...currentCard, isMatched: true }
              : currentCard
          )
        );
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((currentCard) =>
              currentCard.uniqueId === firstCard.uniqueId ||
                currentCard.uniqueId === secondCard.uniqueId
                ? { ...currentCard, isFlipped: false }
                : currentCard
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const handleIdle = () => {
    setIsGameActive(false);
    toast.error("Час вийшов, будьте активніші наступної гри", {
      position: "top-center",
      autoClose: 3000,
    });
  };


  const handleRestart = () => {
    setCards(createCards());
    setFlippedCards([]);
    setMoves(0);
    setScore(0);
    setMatchedPairs(0);
    setIsGameActive(true);
  };


  return (
    <div className="app">
      <Title />

      <div className="app__content">
        <InfoTable
          moves={moves}
          score={score}
          onRestart={handleRestart}
          isGameActive={isGameActive}
          onIdle={handleIdle}
        />

        <div className="cards-grid">
          {cards.map((card) => (
            <GameCard
              key={card.uniqueId}
              card={card}
              onCardClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
