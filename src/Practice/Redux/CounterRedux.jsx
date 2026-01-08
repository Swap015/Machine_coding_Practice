import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./CounterSlice";


const Counter = () => {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <h2>{count}</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>Reset</button>

        </>
    )

}

export default Counter;