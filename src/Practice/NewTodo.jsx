import { useState } from "react";


const NewTodo = () => {

    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [editId, setEditId] = useState(null);


    const addTodo = () => {

        if (!title || !description || !date) {
            alert("Please fill all fields");
        }

        const newTodo = {
            id: Date.now(),
            title,
            description,
            date
        };
        setTodos([...todos, newTodo]);
        setTitle("");
        setDescription("");
        setDate("");

    }

    const handleDelete = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    }

    const handleEdit = (todo) => {
        setTitle(todo.title);
        setDescription(todo.description);
        setDate(todo.date);
        setEditId(todo.id);
    }

    const handleUpdateTodo = () => {
        const updatedTodos = todos.map(todo =>
            todo.id === editId
                ? { ...todo, title, description, date }
                : todo
        );

        setTodos(updatedTodos);

        setTitle("");
        setDescription("");
        setDate("");
        setEditId(null);
    };


    return (
        <div className="p-20 flex items-center justify-center flex-col gap-6">

            <input className="border-2 border-amber-600 p-3" type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} />

            <input className="border-2 border-amber-600 p-3" type="text" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} />

            <input className="border-2 border-amber-600 p-3" type="date" placeholder="Enter date" value={date} onChange={(e) => setDate(e.target.value)} />

            {editId ? (
                <button onClick={handleUpdateTodo}>Update</button>
            ) : (
                <button className="px-6 py-2 bg-pink-500 rounded-full hover:bg-pink-600 font-bold  hover:scale-110 " onClick={addTodo}>Add</button>
            )
            }

            <ul>
                {
                    todos.map((todo) => {
                        return <li key={todo.id} className="border-2 border-gray-700 p-7 flex flex-col gap-3 m-4">

                            Title: <h2 className="border-2 border-pink-400 p-2">{todo.title}</h2>
                            Description: <h3 className="border-2 border-pink-400 p-2">{todo.description}</h3>
                            Date:   <h4 className="border-2 border-pink-400 p-2">{todo.date}</h4>
                            <br />

                            <div className="flex gap-4">
                                <button className="bg-amber-300 rounded-full px-4 py-2" onClick={() => handleEdit(todo)}>Edit 🔨</button>
                                <button className="bg-red-300 rounded-full px-4 py-2" onClick={() => handleDelete(todo.id)}>Delete ❌</button>
                            </div>

                        </li>
                    })
                }
            </ul>

        </div>
    )
}

export default NewTodo;