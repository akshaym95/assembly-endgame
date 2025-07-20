import Confetti from 'react-confetti'
export default function Alert({ gameStatus, farewellMessage, remainingGuesses } ) {
    
    return(
        <>
        {gameStatus === 'win' && (<>
            <Confetti gravity={0.1} width={1000} height={1000}/>
        <div className="alert-container win">
            <h1>You win!</h1>
            <p>Well done! 🎉</p>
        </div>
        </>
        )}
        {gameStatus === 'lose' && (
            <div className="alert-container lose">
                <h1>You lose!</h1>
                <p>Better luck next time! 🤷‍♂️</p>
            </div>
        )}
        {
            gameStatus === '' && farewellMessage && (
                <div className="alert-container game-status">
                    <h1>{farewellMessage}</h1>
                    <p>You have {remainingGuesses} guesses left</p>
                </div>
            )
        }
        {gameStatus === '' && !farewellMessage && (
            <div className="alert-container">
                <h1>Guess the word!</h1>
                <p>You have {remainingGuesses} guesses left</p>
            </div>
        )}
        </>
    )
}