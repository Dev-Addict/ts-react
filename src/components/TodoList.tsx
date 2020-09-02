import React, {FC} from "react";

import Todo from "../models/Todo";

interface TodoListProps {
    todos: Todo[]
}

const TodoList: FC<TodoListProps> = ({todos}) => {
    const renderTodos = () => todos.map(({text, id}) => <li key={id}>{text}</li>);

    return (
        <div>
            <ul>
                {renderTodos()}
            </ul>
        </div>
    );
};

export default TodoList;