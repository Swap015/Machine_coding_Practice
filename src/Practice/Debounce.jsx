import { useEffect, useState } from "react"


const Debouncee = () => {

    const [search, setSearch] = useState("");
    const [debounceSearch, setDebounceSearch] = useState("");
    const users = ["aman", "raman", "shyam", "hari", "gopal"];

    const filtered = users.filter((user) => user.toLowerCase().includes(debounceSearch.toLowerCase()));

    useEffect(() => {

        const timer = setTimeout(() => {
            setDebounceSearch(search);

        }, 800)
        return () => {

            clearTimeout(timer);
        }

    }, [search])

    return (
        <div className="flex flex-col gap-4 justify-center items-center min-h-screen">

            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search users" className="border-3 border-black p-4" />

            <ul>
                {
                    filtered.map((user, i) => {
                        return <li key={i}>
                            {user}
                        </li>
                    })
                }
            </ul>

        </div>
    )
}

export default Debouncee;