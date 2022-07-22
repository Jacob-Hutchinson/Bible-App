import './App.css';
import axios from 'axios'
import { useState } from 'react';
import Button from '@mui/material/Button'


function App() {
  const [chapter, setChapter] = useState()
  const [next, setNext] = useState()
  const [previous, setPrevious] = useState()

  const handleClick = e => {
    axios.get(`/chapter`)
    .then(res => {
      console.log(res.data)
      setChapter(res.data.data)
      setNext(res.data.data.next)
      setPrevious(res.data.data.previous)
    })
  }

  const handleOldClick = e => {
    axios.get(`/oldT`)
    .then(res => {
      console.log(res.data)
      setChapter(res.data.data)
      setNext(res.data.data.next)
      setPrevious(res.data.data.previous)
    })
  }

  const handleNewClick = e => {
    axios.get(`/newT`)
    .then(res => {
      console.log(res.data)
      setChapter(res.data.data)
      setNext(res.data.data.next)
      setPrevious(res.data.data.previous)
    })
  }

  const handlePsalms = e => {
    axios.get(`/psalms`)
    .then(res => {
      console.log(res.data)
      setChapter(res.data.data)
      setNext(res.data.data.next)
      setPrevious(res.data.data.previous)
    })
  }

  const handleWisdom = e => {
    axios.get(`/wisdom`)
    .then(res => {
      console.log(res.data)
      setChapter(res.data.data)
      setNext(res.data.data.next)
      setPrevious(res.data.data.previous)
    })
  }

  const handleGospel = e => {
    axios.get(`/gospel`)
    .then(res => {
      console.log(res.data)
      setChapter(res.data.data)
      setNext(res.data.data.next)
      setPrevious(res.data.data.previous)
    })
  }

  const handleNext = e => {
    axios.post(`/next`, {next: next})
    .then(res => {
      console.log(res.data)
      setChapter(res.data.data)
      setNext(res.data.data.next)
      setPrevious(res.data.data.previous)
    })
  }

  const handlePrevious = e => {
    axios.post(`/previous`, {previous: previous})
    .then(res => {
      console.log(res.data)
      setChapter(res.data.data)
      setNext(res.data.data.next)
      setPrevious(res.data.data.previous)
    })
  }

// console.log(chapter)
  return (
    <div className="App">
      <h1>Read the Bible</h1>
        {/* <button onClick={handleClick}>Get Inspiration</button> */}
        <Button variant="contained" color="secondary" onClick={handleClick}>Get Inspiration</Button>
        <br />
        <br />
        <Button variant="contained" color="secondary" onClick={handleOldClick}>Old Testament</Button>
        {/* <button onClick={handleOldClick}>Old Testament</button> */}
        <Button variant="contained" color="secondary" onClick={handleNewClick}>New Testament</Button>
        {/* <button onClick={handleNewClick}>New Testament</button> */}
        <br />
        <br />
        <Button variant="contained" color="secondary" onClick={handleGospel}>Gospel</Button>
        {/* <button onClick={handleGospel}>Gospel</button> */}
        <Button variant="contained" color="secondary" onClick={handlePsalms}>Psalms</Button>
        {/* <button onClick={handlePsalms}>Psalms</button> */}
        <Button variant="contained" color="secondary" onClick={handleWisdom}>Wisdom</Button>
        {/* <button onClick={handleWisdom}>Wisdom</button> */}
        <br />
          {chapter && <h2>{chapter.reference}</h2>}
        <div id='text'>
        {chapter && <h3>{chapter.content}</h3>}
        </div>
        {chapter&& <div>
        <Button variant="contained" color="secondary" onClick={handlePrevious}>Previous Chapter</Button>
        <Button variant="contained" color="secondary" onClick={handleNext}>Next Chapter</Button>
        {/* <button onClick={handlePrevious}>Previous Chapter</button> */}
        {/* <button onClick={handleNext}>Next Chapter</button> */}
        </div>}
    </div>
  );
}

export default App;
