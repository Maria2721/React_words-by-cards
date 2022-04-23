import "./App.css";
import Listwords from "./components/Listwords.jsx";

import Word from "./components/Word.jsx";
import wordsjson from "./wordsjson.json";

function App() {
  return (
    <div className="App">
      <Listwords></Listwords>

      {wordsjson.map((el) => (
        <Word
          meaning={el.meaning}
          transcription={el.transcription}
          translation={el.translation}
          subject={el.subject}
        ></Word>
      ))}
      <button>Добавить слово</button>
    </div>
  );
}

export default App;
