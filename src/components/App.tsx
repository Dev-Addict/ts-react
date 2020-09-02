import React, {FC, useState} from 'react';

import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";
import Todo from "../models/Todo";

const App: FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const onCreateTodo = (text: string) => setTodos(prevState => [new Todo(text), ...prevState]);

    const onDeleteTodo = (id: string) => setTodos(prevState => prevState.filter(todo => todo.id !== id));

    return (
        <div>
            <CreateTodo onSubmit={onCreateTodo}/>
            <TodoList todos={todos} onDelete={onDeleteTodo}/>
        </div>
    );
};

export default App;
