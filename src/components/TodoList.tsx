import React, {FC} from "react";

import Todo from "../models/Todo";

interface Props {
    todos: Todo[]
}

const TodoList: FC<Props> = ({todos}) => {
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