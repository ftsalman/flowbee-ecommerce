import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const dummyProducts = [
  { id: 1, title: "iPhone", categoryId: "1", image: "/images/products/iphone14.png", price: 1399 },
  { id: 2, title: "Shoes", categoryId: "5", image: "/images/products/shoes1.png", price: 199 },
  { id: 3, title: "Watch", categoryId: "6", image: "/images/products/accessories.png", price: 99 },
];

const CategoriesPage = () => {
     const {id} = useParams();

      const [products,setProducts] = useState([])

   useEffect(()=>{
 
      const filtered = dummyProducts.filter((item) => item.categoryId === id);
      setProducts(filtered)

   },[id])

  return (
      <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Category ID: {id}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded shadow">
            <img src={product.image} alt={product.title} className="w-full h-40 object-contain" />
            <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
            <p className="text-sm text-gray-500">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoriesPage