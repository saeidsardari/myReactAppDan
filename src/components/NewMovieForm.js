import { useState } from 'react'
import './NewMovieForm.css'

export default function NewMovieForm(props) {

const [title, setTitle]=useState('')
const [date, setDate]=useState('')
const [genre, setGenre] = useState('Action')

  // const handleChange = (e) =>{
  //   console.log(e.target.value)
  // }


  const resetForm = () => {
    setTitle('')
    setDate('')
    setGenre('Action')
    }

  const handleSubmit = (e) => {
    e.preventDefault()

    const event = {
      title: title,
      date: date,
      genre:genre,
      id: Math.floor(Math.random()*10000)
    }
    props.addMovie(event)

    resetForm()
  }
  return (
    <div>
      <form className='new-event-form' onSubmit={handleSubmit}>
        <label>
            <span>Movie Title:</span>
          <input 
            type='text'
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
          />  
        </label>
        <label>
            <span>Movie Date:</span>
           <input 
            type="date" 
            onChange={(e)=>setDate(e.target.value)}
            value={date}
           />
        </label>
        <label onChange={e => setGenre(e.target.value)}>
          <span>Movie Genre</span>
          <select>
            <option value="action">Action</option>
            <option value="horror">Horror</option>
            <option value="comedy">Comedy</option>
            <option value="romance">Romance</option>
            <option value="drame">Drama</option>
          </select>
          </label>
        <button>Submit</button>
      </form>
    </div>
  )
}
