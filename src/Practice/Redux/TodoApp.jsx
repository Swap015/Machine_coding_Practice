import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "./TodoSlice";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const TodoApp = () => {
    const [text, setText] = useState("");
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (!text.trim()) return;
        dispatch(addTodo(text));
        setText("");
    };

    return (
        <div className="min-h-screen flex justify-center items-center ">
            <div className=" p-6 rounded-lg shadow-lg w-[400px]">
                <h1 className="text-2xl font-bold mb-4 text-center">Redux Todo</h1>
                <ThemeToggle />

                <div className="flex gap-2 mb-4">
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter todo..."
                        className="flex-1 border px-3 py-2 rounded"
                    />
                    <button
                        onClick={handleAdd}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Add
                    </button>
                </div>


                <ul className="space-y-2">
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className="flex items-center justify-between border px-3 py-2 rounded"
                        >
                            <span
                                onClick={() => dispatch(toggleTodo(todo.id))}
                                className={`cursor-pointer ${todo.completed ? "line-through text-gray-400" : ""
                                    }`}
                            >
                                {todo.text}
                            </span>

                            <button
                                onClick={() => dispatch(deleteTodo(todo.id))}
                                className="text-red-500 font-bold"
                            >
                                ✕
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoApp;
