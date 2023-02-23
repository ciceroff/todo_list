import styles from './TaskList.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { Task } from './Task'
import { v4 as uuidv4 } from 'uuid'
import { ChangeEvent, FormEvent, useState } from 'react'

interface TaskProps {
  key: string
  title: string
  isDone: boolean
}

export function TaskList() {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState<TaskProps[]>([])

  function handleCreateTask(event: FormEvent) {
    event.preventDefault()
    setTasks([...tasks, { isDone: false, key: uuidv4(), title: newTask }])
    setNewTask('')
  }

  function handleChangeTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  function deleteTask(key: string) {
    const newTasks = tasks.filter((task) => task.key !== key)
    setTasks(newTasks)
  }
  return (
    <div className={styles.taskPage}>
      <form onSubmit={handleCreateTask} className={styles.taskForm}>
        <input
          onChange={handleChangeTask}
          required
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTask}
        />
        <button type="submit">
          Criar <AiOutlinePlusCircle size={20} />
        </button>
      </form>

      <div className={styles.taskCounters}>
        <div className={styles.tasksCreated}>
          <p>
            Tarefas criadas <span>{tasks.length}</span>
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
          return (
            <Task
              key={task.key}
              title={task.title}
              isDone={task.isDone}
              id={task.key}
              onDeleteTask={deleteTask}
            />
          )
        })}
      </div>
    </div>
  )
}
