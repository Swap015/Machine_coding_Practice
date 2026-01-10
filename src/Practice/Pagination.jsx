import axios from "axios";
import { useEffect, useState } from "react"


const Pagination = () => {

    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {

        const fetcProducts = async () => {
            const res = await axios.get("https://dummyjson.com/products?limit=100");

            setProducts(res.data.products);

            console.log("data proo " + res.data.products);

        }

        fetcProducts();
    }, [])




    const totalPages = Math.ceil(products.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentProducts = products.slice(startIndex, endIndex);


    return (
        <div className="min-h-screen flex gap-4 flex-col">

            <h1 className="text-center text-3xl">Products</h1>

            <div className="flex flex-wrap justify-center items-center">
                {currentProducts.map((product) => (
                    <div key={product.id} className="h-68 w-60 border border-black flex flex-col justify-center items-center m-2">
                        <img src={product.thumbnail} alt="" className="h-48 w-42" />
                        <h3>{product.title}</h3>
                        <h4>{product.price}</h4>
                    </div>

                ))}
            </div>


            <div className="flex justify-center items-center">

                <button className={`text-3xl transition
                        ${currentPage === 1
                        ? "opacity-40 cursor-not-allowed"
                        : "opacity-100 cursor-pointer"}
                `} disabled={currentPage == 1} onClick={() => setCurrentPage(currentPage - 1)} >◀️</button>

                {
                    Array.from({ length: totalPages }).map((_, index) => (
                        <button style={{
                            margin: "0 5px",
                            fontWeight: currentPage === index + 1 ? "bold" : "normal",
                        }} className="py-1 px-2 border mx-2" onClick={() => setCurrentPage(index + 1)}>{index + 1}  </button>
                    ))}

                <button className={`text-3xl transition
                        ${currentPage === totalPages
                        ? "opacity-40 cursor-not-allowed"
                        : "opacity-100 cursor-pointer"}
                `} onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage == totalPages}>▶️</button>


            </div>

        </div>
    )
}

export default Pagination;