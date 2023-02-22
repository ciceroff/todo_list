import { Trash } from 'phosphor-react'

interface TaskProps {
  key: string
  title: string
  isDone: boolean
}

export function Task({ title, key, isDone }: TaskProps) {
  return (
    <div>
      <button>Bolinha</button>
      <p>{title}</p>
      <Trash size={20} weight="light" />
    </div>
  )
}
