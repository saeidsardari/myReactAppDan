import Styles from './EventList.module.css'
export default function EventList(props) {
  return (
    <div>
      {
       props.events.map((event, index) => (
          <div className={Styles.card}key={event.id}>
            <h2>{index + 1}- {event.title}</h2>
            <p>{event.genre} - {event.date}</p>
            <button onClick ={() => props.handleClick(event.id)}> DELETE </button>
          </div>
          ))
      }
    </div>
  )
}
