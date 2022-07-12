import './App.css';
import axios from 'axios'
import { useState } from 'react';

function App() {
  const [chapter, setChapter] = useState()
  const [text, setText] = useState()

  const handleClick = e => {
    axios.get(`http://localhost:4004/chapter`)
    .then(res => {
      console.log(res.data)
      setChapter(res.data.data)
    })
  }
// console.log(chapter)
  return (
    <div className="App">
      <h1>Read the Bible</h1>
        <button onClick={handleClick}>Get Inspiration</button>
        <br />
          {chapter && <h2>{chapter.reference}</h2>}
        <div id='text'>
        {chapter && <h3>{chapter.content}</h3>}
        </div>
    </div>
  );
}

export default App;
