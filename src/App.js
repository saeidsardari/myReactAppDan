import './App.css';
import { useState } from 'react'
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewMovieForm from './components/NewMovieForm';

function App() {
  const [showEvents, setShowEvents] = useState(true)
  const [showModal, setShowModal] = useState(false);

  const [events, setEvents] = useState([]);

  const handleClick = (id) => {
    setEvents((prevEvents)=> {
      return prevEvents.filter((event) => { 
      return id !== event.id
    })
  })
  }

const addMovie = (event) => {
  setEvents((prevEvents)=>{
    return [...prevEvents ,event]
  })
  setShowModal(false)
}

const handleClose = () => {
  setShowModal(false)
}

const handleOpen = () => {
  setShowModal(true)
}

  return (
    <div className='App'>
      <Title title="My Faverite Movie" subtitle="Latest Movie"/>
      {
      showEvents && (<>
        <button onClick={()=> setShowEvents(false)}>Hide</button>
      </>)
      }
        {
      !showEvents && (<>
        <button onClick={()=> setShowEvents(true)}>Show</button>
      </>)
      }

     {
      showEvents && <EventList events={events} handleClick={handleClick}/>
     }
    
      {showModal  && <Modal  isSalesModal={true}>
      <NewMovieForm addMovie={addMovie}/>
      </Modal>}
<br/>
      <button onClick={handleOpen}>Add New Movie</button>
    </div>
  )
  }
export default App;
