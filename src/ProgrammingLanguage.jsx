export default function ProgrammingLanguage({ programmingLanguages, wrongGuessesCount }) {
    return (
        <>
        <div className="language-container">
        {programmingLanguages.map((language,index) => {
          return (
            <div className="language-card" key={language.id} style={{backgroundColor: language.backgroundColor, color: language.color}}>
              <span className={`language-card-text ${index < wrongGuessesCount ? 'skull' : ''}`} key={language.id}  style={{backgroundColor: language.backgroundColor, color: language.color}}>{language.name}</span>
            </div>
          )
        })}
      </div>
      </>
    )
}