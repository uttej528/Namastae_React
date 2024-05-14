/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
    console.log(products);
  };

  return (
    <div className="grid grid-cols-4 gap-10 justify-center items-center">
      {products.map((product) => (
        <div key={product.id} className="bg-gray-200 w-[20vw] rounded-md overflow-hidden">
          <img
            src={product.thumbnail}
            className="rounded-md rounded-bl-none rounded-br-none hover:scale-105 transition-all"
            alt={product.title}
          />
          <div className="p-2">
            <h2 className="font-bold uppercase text-gray-600">{product.title}</h2>
            <p className="text-xs">{product.description}</p>
            <div className="flex justify-between items-center my-1">
              <span className="bold text-gray-600">${product.price}</span>
              <button className="bg-black text-white px-3 rounded-md hover:bg-white hover:text-black">
                Buy
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
