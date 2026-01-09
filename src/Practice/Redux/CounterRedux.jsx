
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './CounterSlice';
import ThemeToggle from './ThemeToggle';

const CounterRedux = () => {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();



    return (
        <div className='flex flex-col gap-5 justify-center items-center'>

            <ThemeToggle />

            <h1 className='text-4xl'>{count}</h1>


            <div className="flex gap-8 mt-4 font-bold">

                <button className='bg-amber-500 py-1 px-2 rounded-full text-4xl' onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())} className='bg-amber-500 py-1 px-2 rounded-full text-4xl'>-</button>
                <button onClick={() => dispatch(reset())} className='bg-amber-500 py-1 px-2 rounded-full text-xl'>Reset</button>

            </div>


        </div>
    )
}

export default CounterRedux;