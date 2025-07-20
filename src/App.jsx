import Header from './Header'
import Keyboard from './Keyboard'
import Alert from './Alert'
import Placeholder from './Placeholder'
import ProgrammingLanguage from './ProgrammingLanguage'
import { useState, useEffect } from 'react'

function App() {
  //constants
  const words = ['REACT', 'PYTHON', 'JAVA', 'RUBY', 'ASSEMBLY', 'HTML', 'CSS', 'NODEJS', 'PHP', 'SQL', 'C', 'GO', 'RUST', 'SWIFT', 'KOTLIN', 'SCALA', 'TYPESCRIPT', 'JAVASCRIPT']
  const programmingLanguages = [
    {
      id: 1,
      name: 'HTML',
      backgroundColor: '#E34F26',
      color: '#ffffff',
    },
    {
      id: 2,
      name: 'CSS',
      backgroundColor: '#1572B6',
      color: '#ffffff',
    },
    {
      id: 3,
      name: 'JavaScript',
      backgroundColor: '#F7DF1E',
      color: '#000000',
    },
    {
      id: 4,
      name: 'React',
      backgroundColor: '#61DAFB',
      color: '#000000',
    },
    {
      id: 5,
      name: 'Python',
      backgroundColor: '#3776AB',
      color: '#ffffff',
    },
    {
      id: 6,
      name: 'Java',
      backgroundColor: '#007396',
      color: '#ffffff',
    },
    {
      id: 7,
      name: 'C#',
      backgroundColor: '#239120',
      color: '#ffffff',
    },
    {
      id: 8,
      name: 'Ruby',
      backgroundColor: '#CC342D',
      color: '#ffffff',
    },
    {
      id: 9,
      name: 'Assembly',
      backgroundColor: '#6E4C13',
      color: '#ffffff',
    },
  ]
  const farewellMessageArray =[" RIP ", "Farewell ", "Goodbye ", "Adios ", "Hasta la vista ", "See you later ", "Goodbye ", "Farewell ", "Adios ", "Hasta la vista ", "See you later "]
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  
  //states
  const [currentWord, setCurrentWord] = useState(() => getRandomWord())
  const [userGuesses, setUserGuesses] = useState([])
  const [numberOfGuesses, setNumberOfGuesses] = useState(1)
  const [gameStatus, setGameStatus] = useState('')

  
  //derived
  const wrongGuessesCount = userGuesses.filter(letter => !currentWord.split('').includes(letter.toUpperCase())).length
  const gameOver = numberOfGuesses > 8 || currentWord.split('').every(letter => userGuesses.includes(letter.toUpperCase()))
  const farewellMessage = wrongGuessesCount > 0 && farewellMessageArray[wrongGuessesCount - 1] ? `${farewellMessageArray[wrongGuessesCount - 1]} ${programmingLanguages[wrongGuessesCount - 1].name}` : ''
  const remainingGuesses = 8 - userGuesses.length

  //effects
  useEffect(() => {
    if (currentWord.split('').every(letter => userGuesses.includes(letter.toUpperCase()))) {
      setGameStatus('win')
    }
    if (numberOfGuesses > 8) {
      setGameStatus('lose')
    }
  }, [userGuesses, numberOfGuesses])

  //functions
  function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)]
  }
  
  function addUserGuess(letter) {
    setNumberOfGuesses(numberOfGuesses + 1)
    setUserGuesses([...userGuesses, letter.toUpperCase()])
  
  }

  function resetGame() {
    setUserGuesses([])
    setNumberOfGuesses(1)
    setGameStatus('')
    setCurrentWord(getRandomWord())
  }
 
  //render
  return (
    <>
      <div className="app-container">
        <Header />
        <Alert gameStatus={gameStatus} farewellMessage={farewellMessage} remainingGuesses={remainingGuesses}/>
        <ProgrammingLanguage programmingLanguages={programmingLanguages} wrongGuessesCount={wrongGuessesCount}/>
        <Placeholder currentWord={currentWord} userGuesses={userGuesses} gameOver={gameOver}/>
        <Keyboard alphabet={alphabet} userGuesses={userGuesses} addUserGuess={addUserGuess} currentWord={currentWord} gameOver={gameOver}/>
        {gameOver && <button className="reset-button" onClick={resetGame}>New Game</button>}
      </div>
    </>
  )
}

export default App
