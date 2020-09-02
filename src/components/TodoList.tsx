import React, {FC} from "react";

import Todo from "../models/Todo";

interface Props {
    todos: Todo[],
    onDelete: (id: string) => void
}

const TodoList: FC<Props> = ({todos, onDelete}) => {

    const renderTodos = () => todos.map(({text, id}) => {
        const onDeleteClick = (_: any) => {
            onDelete(id);
        };

        return (
            <li key={id}>
                <span>{text}</span>
                <button onClick={onDeleteClick}>DELETE</button>
            </li>)
    });

    return (
        <div>
            <ul>
                {renderTodos()}
            </ul>
        </div>
    );
};

export default TodoList;