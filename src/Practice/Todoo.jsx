import { useState } from 'react'

const Todoo = () => {

  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);


  const addTodo = () => {
    if (!title) {
      alert("Title cannot be empty");
      return;
    }

    if (editId) {
      setTodos(prev =>
        prev.map(todo =>
          todo.id === editId
            ? { ...todo, title }
            : todo
        )
      );
      setEditId(null);
    }
    else {
      setTodos(prev => [...prev, { title, id: Date.now() }]);
    }

    setTitle("");
  }

  const editTodo = (todo) => {
    setTitle(todo.title);
    setEditId(todo.id);
  }


  return (
    <div className='flex flex-col min-h-screen justify-center items-center'>

      <div className='flex flex-col gap-5'>

        <div className='flex gap-5'>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter title of TODO' className='border p-3' />

          <button  className='bg-emerald-500 rounded-2xl px-4 py-1 text-xl font-bold' onClick={addTodo}>Add</button>
        </div>



        <ul className='flex flex-col gap-3'>
          {
            todos.map((todo, index) => (
              <li key={todo.id} className='bg-pink-200 font-bold p-2 rounded-2xl flex justify-between items-center'>{todo.title}


                <div>

                  <button
                    className="text-blue-600 text-xl font-bold"
                    onClick={() => editTodo(todo)}
                  >
                    ✏️
                  </button>

                  <button className='text-red-600 text-xl font-bold ml-4' onClick={() => setTodos(todos.filter((t, i) => i !== index))}>❌</button>
                </div>
              </li>



            ))
          }

        </ul>
      </div >

    </div >
  )
}

export default Todoo;