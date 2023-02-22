import styles from './TaskList.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { Task } from './Task'
import { v4 as uuidv4 } from 'uuid'

interface TaskProps {
  key: string
  title: string
  isDone: boolean
}
export function TaskList() {
  const tasks: TaskProps[] = [
    { key: uuidv4(), title: 'string', isDone: false },
    { key: uuidv4(), title: 'string', isDone: false },
    { key: uuidv4(), title: 'string', isDone: false },
    { key: uuidv4(), title: 'string', isDone: false },
  ]

  return (
    <div className={styles.taskPage}>
      <form className={styles.taskForm}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar <AiOutlinePlusCircle size={20} />
        </button>
      </form>

      <div className={styles.taskCounters}>
        <div className={styles.tasksCreated}>
          <p>
            Tarefas criadas <span>0</span>
          </p>
        </div>

        <div className={styles.tasksDone}>
          <p>
            Tarefas concluídas <span>0</span>
          </p>
        </div>
      </div>

      <div className={styles.taskList}>
        {tasks.map((task) => {
          return <Task key={task.key} title={task.title} isDone={task.isDone} />
        })}
      </div>
    </div>
  )
}
