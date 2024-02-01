import './Modal.css'
export default function Modal(props) {
  return (
    <div className="modal-backdrop">
    <div className="modal" style={{
      border:"4px solid",
      borderColor:props.isSalesModal ? "rgba(158, 168, 21, 0.644)" : "red"

    }}>
      
        {props.children}
      </div>
    </div>
  )
}
