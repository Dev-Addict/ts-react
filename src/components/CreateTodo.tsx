import React, {ChangeEvent, FC, FormEvent, useState} from "react";

interface Props {
    onSubmit: (todo: string) => void
}

const CreateTodo: FC<Props> = ({onSubmit}) => {
    const [todo, setTodo] = useState('');

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        setTodo('');
        onSubmit(todo);
    };

    const onTodoChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value!);
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="todo">Todo:</label>
                <input type="text" required value={todo} onChange={onTodoChange}/>
            </div>
            <button type="submit">Create Todo</button>
        </form>
    );
};

export default CreateTodo;