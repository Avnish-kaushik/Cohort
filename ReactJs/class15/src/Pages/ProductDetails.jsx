import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const productData = useContext(ProductDataContext)

    const { productId } = useParams()

    const specificProduct = productData.find((items) => items.id == productId)
    console.log(specificProduct);


    return (
        <div className='flex flex-col items-center justify-center h-screen gap-4 '>
            <div className='h-80 w-80 p-7  rounded-xl shadow-gray-700 shadow-lg '>
                <img className='h-40 w-40 ' src={specificProduct.image} alt="" />
                <h1 className='h-20 w-40 '>{specificProduct.title}</h1>
                <h1 className='h-20 w-40'>{specificProduct.price}</h1>
            </div>
            <button className='ml-2 active:scale-97 cursor-pointer bg-blue-500 text-white px-4 py-2 text-3xl font-medium rounded-xl shadow-2xl'>Buy Now</button>
        </div>
    )
}

export default ProductDetails
