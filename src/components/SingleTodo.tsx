interface IProps {
  todo: { title: string; isComplete: boolean; id: number };
  handleDeleteTodo: (id: number) => void;
}

const SingleTodo = ({ todo, handleDeleteTodo }: IProps): JSX.Element => {
  return (
    <>
      <li onClick={() => handleDeleteTodo(todo.id)} key={todo.id}>
        {todo.title}
      </li>
    </>
  );
};

export default SingleTodo;
