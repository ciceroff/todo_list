import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

interface TaskProps {
  key: string
  title: string
  isDone: boolean
  id: string
  onDeleteTask: (id: string) => void
  onHandleDone: (id: string) => void
}

export function Task({
  title,
  id,
  isDone,
  onDeleteTask,
  onHandleDone,
}: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(id)
  }

  function handleChangeDone() {
    onHandleDone(id)
  }

  return (
    <div className={styles.task}>
      <div className={styles.inputAndText}>
        <input
          onChange={handleChangeDone}
          type="checkBox"
          id="chk1"
          className={styles.checkBox}
        />
        <label htmlFor="chk1"></label>
        <p className={isDone ? styles.textDone : ''}>{title}</p>
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
