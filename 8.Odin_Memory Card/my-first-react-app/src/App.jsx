import {useState} from 'react';
import './App.css';
import Cards from "./Components/Cards"


function App() {

const [state,setState] = useState(0);

  return (
    <div className="App">
      <h1>Game of Thrones</h1>
      <Cards />
    </div>
  )
}

export default App
