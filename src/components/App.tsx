import React from 'react';

import TodoList from "./TodoList";
import Todo from "../models/Todo";

const App: React.FC = () => {
    const todos: Todo[] = [
        new Todo('Finish TypeScript Course.'),
        new Todo('Finish User Experience Course.')
    ];

    return (
        <div>
            <TodoList todos={todos}/>
        </div>
    );
};

export default App;
