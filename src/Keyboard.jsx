export default function Keyboard({ alphabet, userGuesses, addUserGuess, currentWord, gameOver }) {
    function checkLetter(letter) {
        if (userGuesses.includes(letter.toUpperCase())) {
            if (currentWord.split('').includes(letter.toUpperCase())) {
                return {'backgroundColor': '#10A95B'}
            }else{
                return {'backgroundColor': '#EC5D49'}
            }
        }
    }
    return(
        <div className="keypad-container">
            {alphabet.split('').map((letter) => (
                <button className="keypad-button" key={letter}  style={checkLetter(letter)} onClick={() => addUserGuess(letter)} disabled={ userGuesses.includes(letter.toUpperCase()) || userGuesses.length >= 8 || gameOver}>{letter.toUpperCase()}</button>
            ))}
        </div>
    )
}