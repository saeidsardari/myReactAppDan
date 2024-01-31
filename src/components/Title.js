import'./Title.css'

export default function Title (props){
    return (
        <div className='title-block'>
            <h1 class="Title">{props.title}</h1>
            <h1 class="subtitle">{props.subtitle}</h1>
            
        </div>
    )
}
