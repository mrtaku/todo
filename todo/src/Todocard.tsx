import { Todo } from "./App"

type props = {
    todo:Todo
}
export function Todocard(p:props) {
    return <div>meow
        <h1>{p.todo.title}
        </h1>
        <div>
            <h1>
                {p.todo.completed}
            </h1>
        </div>
    </div>
}