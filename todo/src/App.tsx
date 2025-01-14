import { useEffect, useState } from 'react'
import './App.css'
import { Todocard } from './Todocard'

export type Todo = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}
function App() {
  const [todos, settodos] = useState<Todo[]>([])
  async function getTodos() {
    const values = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await values.json() as Todo[]
    settodos(data)
    console.log(data)

  }
  useEffect(() => {getTodos()}, [])
  return (<div>hello {todos.map((todo) => <Todocard todo={todo}/>)}</div>)

};

export default App
