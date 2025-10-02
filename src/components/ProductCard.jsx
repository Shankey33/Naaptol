import React from 'react'

const ProductCard = ({key, product}) => {
  return (
    <div>
        <div key={key} className="product border p-4 m-4 rounded-lg shadow-lg cursor-pointer transition-shadow duration-300">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded"/>
            <h2 className="text-lg font-bold mb-2">{product.name}</h2>
            <p className="text-gray-700">{product.price}</p>
        </div>
    </div>
  )
}

export default ProductCard
