# 🎮 Assembly Endgame

A modern, interactive hangman game themed around programming languages, built with React and Vite. Guess the programming language before your favorite languages meet their digital demise!

![Assembly Endgame](https://img.shields.io/badge/React-19.1.0-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.0.4-purple?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

## 🎯 Game Overview

Assembly Endgame is a unique twist on the classic hangman game where players guess programming language names. Instead of drawing a traditional hangman, the game features programming language cards that "die" with skull emojis when you make wrong guesses. Can you save your favorite programming languages from the digital graveyard?

## ✨ Features

- **🎨 Modern UI**: Clean, responsive design with smooth animations
- **💀 Unique Theme**: Programming language cards with skull animations for wrong guesses
- **🎯 18 Programming Languages**: From HTML to TypeScript, challenge yourself with various tech stacks
- **⌨️ Interactive Keyboard**: Click-based letter selection with visual feedback
- **🎉 Win/Lose States**: Clear game status indicators and celebration effects
- **🔄 New Game**: Easy reset functionality to play again
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices

## 🎮 How to Play

1. **Start the Game**: A random programming language is selected
2. **Guess Letters**: Click on the virtual keyboard to guess letters
3. **Watch the Cards**: Programming language cards show skull emojis for wrong guesses
4. **Win Condition**: Guess all letters in the programming language name
5. **Lose Condition**: Make 8 wrong guesses (all programming language cards become skulls)
6. **Play Again**: Click "New Game" to start a new round

## 🛠️ Technologies Used

- **React 19.1.0** - Modern React with hooks and functional components
- **JavaScript ES6+** - Modern JavaScript features including async/await, destructuring, and arrow functions
- **Vite 7.0.4** - Fast build tool and development server
- **CSS3** - Custom styling with flexbox and grid layouts
- **React Confetti** - Celebration effects for winning
- **State Management** - React hooks (useState, useEffect) for game state
- **Component Architecture** - Modular React components with props and event handling

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/assembly-endgame.git
   cd assembly-endgame
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to play the game!

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
assembly-endgame/
├── src/
│   ├── components/
│   │   ├── App.jsx              # Main game component
│   │   ├── Header.jsx           # Game title and header
│   │   ├── Alert.jsx            # Game status alerts
│   │   ├── Placeholder.jsx      # Word display component
│   │   ├── ProgrammingLanguage.jsx  # Language cards
│   │   └── Keyboard.jsx         # Virtual keyboard
│   ├── assets/                  # Images and static files
│   ├── index.css               # Global styles
│   └── main.jsx                # App entry point
├── public/                     # Public assets
├── package.json               # Dependencies and scripts
└── README.md                  # This file
```

## 🎨 Game Components

### Core Game Logic
- **Word Selection**: Random selection from 18 programming languages
- **Guess Tracking**: Tracks correct and incorrect letter guesses using React state
- **Game State Management**: Win/lose conditions and game reset functionality with useEffect hooks
- **Event Handling**: Interactive keyboard with click events and visual feedback

### Visual Elements
- **Programming Language Cards**: Colorful cards representing different languages with dynamic styling
- **Skull Animation**: Cards transform with skull emojis for wrong guesses using CSS pseudo-elements
- **Virtual Keyboard**: Interactive letter selection with visual feedback and disabled states
- **Word Display**: Underscore placeholders that reveal letters when guessed with conditional rendering
- **Responsive Design**: Flexbox and CSS Grid layouts for cross-device compatibility

## 🎯 Programming Languages Included

- HTML, CSS, JavaScript, React
- Python, Java, C#, Ruby, Assembly
- Node.js, PHP, SQL, C, Go, Rust
- Swift, Kotlin, Scala, TypeScript

## 🎨 Customization

### Adding New Words
Edit the `words` array in `src/App.jsx` to add more programming languages:

```javascript
const words = ['REACT', 'PYTHON', 'JAVA', 'RUBY', 'ASSEMBLY', 'HTML', 'CSS', 'NODEJS', 'PHP', 'SQL', 'C', 'GO', 'RUST', 'SWIFT', 'KOTLIN', 'SCALA', 'TYPESCRIPT', 'JAVASCRIPT', 'YOUR_NEW_LANGUAGE']
```

### Styling
Modify `src/index.css` to customize colors, animations, and layout.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by classic hangman games
- Built with modern React best practices
- Special thanks to the programming language community for the diverse tech stack

## 📞 Contact

- **GitHub**: [Akshay M](https://github.com/akshaym95)

---

**Happy coding and may your programming languages stay alive! 💻💀**
