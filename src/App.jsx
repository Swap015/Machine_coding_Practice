
import { useSelector } from 'react-redux'
import './App.css'
// import Counter from './Practice/Counter'
import Debouncee from './Practice/Debounce'
import NewTodo from './Practice/NewTodo'
// import Modal from './Practice/Modal'
// import Todoo from './Practice/Todoo'
import CounterRedux from "./Practice/Redux/CounterRedux"
import ThemeToggle from './Practice/Redux/ThemeToggle'
import TodoApp from './Practice/Redux/TodoApp'
import Pagination from './Practice/Pagination'

function App() {

  const dark = useSelector((state) => state.theme.dark);

  return (
    <div className={`min-h-screen transition-all duration-300 
        ${dark ? "bg-black text-white " : "bg-white text-black"}`}>


      <div className='min-h-screen'>
        {/* <Counter /> */}
        {/* <Todoo /> */}
        {/* <Modal /> */}

        {/* <Debouncee /> */}
        {/* <NewTodo/> */}
        {/* <CounterRedux /> */}
        {/* <ThemeToggle /> */}
        {/* <TodoApp /> */}


        <Pagination />
      </div>


    </div>
  )
}

export default App
