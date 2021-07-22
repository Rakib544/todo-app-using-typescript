import { useState } from "react";
interface TodoList {
  title: string;
  isComplete: false;
  id: number;
}

function App() {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoList[]>([
    {
      title: "I have to do my remaining works",
      isComplete: false,
      id: 1,
    },
    {
      title: "I have to buy Keyboard",
      isComplete: false,
      id: 2,
    },
    {
      title: "I have to play cricket",
      isComplete: false,
      id: 3,
    },
  ]);

  const handleAddTodo = (): void => {
    setTodoList([
      ...todoList,
      {
        title: todoTitle,
        id: todoList.length + 1,
        isComplete: false,
      },
    ]);
    setTodoTitle("");
  };

  const handleDeleteTodo = (id: number): void => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h2 className="text-center">Todo App</h2>
      <ul>
        {todoList.map((todo) => (
          <li onClick={() => handleDeleteTodo(todo.id)} key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <div className="flex">
        <input
          type="text"
          onChange={(e) => setTodoTitle(e.target.value)}
          placeholder="Enter todo"
          value={todoTitle}
          name="todo"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
    </div>
  );
}

export default App;
