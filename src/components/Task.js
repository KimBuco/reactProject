import Tasks from "./Tasks"

const Task = ( {tasks, onDelete, onToggle }) => {


  return (
    <div>
      {tasks.map((task, index) => (
        <Tasks key={index}
        task = {task}
        onDelete={onDelete}
        onToggle = {onToggle} />
      ))}
    </div>
  )
}

export default Task
