import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    if (count <= 0) {
        alert("Count cannot be smaller than 0");
    }

    return (
        <div className='font-bold flex justify-center items-center flex-col'>
            <h1 className=' text-black text-3xl bg-amber-300 px-8 py-2 rounded-xl m-4'>Counter App</h1>

            <h2 className='text-5xl my-10'>Count : {count}</h2>

            <div className='font-bold flex justify-center items-center gap-6 text-2xl'>
                

                <button onClick={() => setCount(count + 1)} className='font-bold text-5xl bg-green-500 p-3 rounded-3xl'>+</button>

                <button className='font-bold text-5xl bg-red-500 p-3 rounded-3xl' onClick={() => setCount(count - 1)}>-</button>

                <button onClick={() => setCount(0)}
                    className='font-bold text-2xl bg-amber-500 p-3 rounded-3xl'
                >Reset</button>

            </div>
        </div>
    )
}

export default Counter