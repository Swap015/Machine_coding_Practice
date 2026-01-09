import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./ThemeSlice";

const ThemeToggle = () => {

    const dark = useSelector((state) => state.theme.dark);
    const dispatch = useDispatch();


    return (

        <div className={`absolute right-6 flex flex-col justify-center items-center gap-5 `}>

            {/* <h1 className="text-3xl"> Theme : {dark ? "DARK" : "LIGHT"}</h1> */}

            <button onClick={() => dispatch(toggleTheme())} className={`text-4xl font-bold rounded-full border-2 text-center ${dark ? "border-white/70 py-1 px-2" : "border-black/70 py-1 px-2 "}`}>🌙</button>


        </div>
    )
}

export default ThemeToggle;