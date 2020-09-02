import React, {FC, useState} from 'react';

import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";
import Todo from "../models/Todo";

const App: FC = () => {
    const [todos, setTodos] = useState([
        new Todo('Finish TypeScript Course.'),
        new Todo('Finish User Experience Course.')
    ]);

    const onCreateTodo = (text: string) => setTodos(prevState => [new Todo(text), ...prevState]);

    return (
        <div>
            <CreateTodo onSubmit={onCreateTodo}/>
            <TodoList todos={todos}/>
        </div>
    );
};

export default App;
