import { Trash } from 'phosphor-react'
import styles from './Task.module.css'
interface TaskProps {
  key: string
  title: string
  isDone: boolean
  id: string
  onDeleteTask: (id: string) => void
}

export function Task({ title, id, isDone, onDeleteTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(id)
  }

  return (
    <div className={styles.task}>
      <div className={styles.inputAndText}>
        <input type="checkBox" id="chk1" className={styles.checkbox} />
        <label htmlFor="chk1"></label>
        <p>{title}</p>
      </div>
      <Trash
        onClick={handleDeleteTask}
        className={styles.taskTrash}
        size={20}
        weight="light"
      />
    </div>
  )
}
