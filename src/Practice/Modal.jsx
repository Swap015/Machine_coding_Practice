import { useState } from 'react'

const Modal = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className='p-20 flex items-center justify-center'>

            <button className="bg-emerald-600 text-white font-bold p-3 rounded-3xl"
                onClick={() => setOpen(true)}
            >OPEN</button>


            {
                open && (
                    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center' >

                        <div className='p-6 rounded relative w-[400px] border-2 border-white bg-green-500/40'>
                            <button className='font-extrabold text-2xl absolute top-2 right-2' onClick={() => setOpen(false)}>❌</button>

                            <p className='text-white font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A earum ullam rem rerum, quam sunt temporibus debitis eveniet consequatur quae ab, sequi mollitia, eaque molestiae voluptas ratione sed culpa odio eius soluta eos ad. Ipsa aspernatur laudantium nihil sit ab consequuntur assumenda eos libero, eum quia quas expedita ex tempora!</p>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Modal;