import './index.css'

const TodoItem = props => {
  const {content, deleteItem} = props
  const {title, id} = content
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="list-container" key={id}>
      <div className="card-container-2">
        <p className="parag">{title}</p>
        <button type="button" className="dlt" onClick={onDelete} key={id}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
