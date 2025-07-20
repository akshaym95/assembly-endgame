export default function Placeholder({ currentWord, userGuesses, gameOver }) {
    function showLetter(letter) {
        if (userGuesses.includes(letter) || gameOver) {
            return letter
        }else{
            return '-'
        }
    }
    return (
        <div className="placeholder-container">
        {
          currentWord.split('').map((letter, index) => {
            return (
              <span className="placeholder-card" key={index} style={{color: userGuesses.includes(letter) ? 'green' : 'white'}}> {showLetter(letter)} </span>
            )
          })
        }
      </div>
    )
}