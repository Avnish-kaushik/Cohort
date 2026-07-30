import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const Products = () => {

    const productData = useContext(ProductDataContext)

    return (
        <div className='grid  grid-cols-4'>
            {productData.map(function (items, index) {
                return <Link to={`/products/${items.id}`} key={index} className='flex flex-col p-3 h-90 w-90 m-5 border bg-gray-100 rounded-lg shadow-2xl'>
                    <img className='h-40 w-40 ' src={items.image} alt="" />
                    <h1 className='h-20 w-40 '>{items.title}</h1>
                    <h1 className='h-20 w-40'>{items.price}</h1>
                </Link>
            })}
        </div>
    )
}

export default Products