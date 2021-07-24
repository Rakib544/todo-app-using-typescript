import { useState } from "react";
import SingleTodo from "./components/SingleTodo";
import { todoData } from "./todoData";

interface TodoList {
  title: string;
  isComplete: boolean;
  id: number;
}

function App() {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoList[]>(todoData);

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
          <SingleTodo
            todo={todo}
            key={todo.id}
            handleDeleteTodo={handleDeleteTodo}
          />
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
