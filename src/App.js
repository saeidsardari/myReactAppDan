import logo from './images/logo.svg';
import './App.css';
import { useState } from 'react'
import { computeHeadingLevel } from '@testing-library/react';
import Title from './Title.js'


function App() {
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "THOR: LOVE AND THUNDER (2022)", id: 1},
    {title: "THE GRAY MAN (2022)", id: 2},
    {title: "THE SEA BEST (2022)", id: 3},
    {title: "TOP GUN: MAVERICK (2022)", id: 4},
    {title: "DOCTOR STRANGE IN THE MULTIVERSE OF MADNESS (2022)", id: 5},
    {title: "THUSTLE (2022)", id: 6}
  ])
  const handleClick = (id) => {
    setEvents((prevEvents)=> {
      return prevEvents.filter((event) => { 
      return id !== event.id
    })
  })
  }
  return (
    <div className='App'>
      {
        <Title />
      showEvents && (<div>
        <button onClick={()=> setShowEvents(false)}>Hide</button>
      </div>)
      }
        {
      !showEvents && (<div>
        <button onClick={()=> setShowEvents(true)}>Show</button>
      </div>)
      }

      {
        showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>{index + 1}- {event.title}</h2>
          <button onClick ={() => handleClick(event.id)}> DELETE </button>
        </div>
        ))
      }
    </div>
  );
  }
export default App;
