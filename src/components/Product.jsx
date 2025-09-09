import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ShimmerEffect from './ShimmerEffect';
function Product() {
    const [data, setData] = useState([])
    async function products() {
        try {
            let response = await axios.get(`https://api.escuelajs.co/api/v1/products`);
            let finalres = response.data;
            setData(finalres);
            console.log(finalres);
        } catch (error) {
            console.log("error", error);
        }
    }
    useEffect(() => {
        products();
    }, [])

    if (data.length === 0) {
        return <ShimmerEffect />
    }
    return (
        <>
            <h1 className='text-center font-light text-4xl mt-5 capitalize text-blue-700'>Our Products</h1>
            <div className='container mx-auto px-6 py-5 lg-px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {data.map((val, index) => {
                    return (
                        <div key={index} className='mx-w-md w-full p-3 rounded-2xl shadow-md'>
                            <div className='w-full h-[20rem]'>
                                <img src={val.images} alt={val.images} className='w-full h-full object-cover rounded-3xl' />
                            </div>
                            <div className='product-info'>
                                <p className='text-center text-xl font-semibold mt-5'>{val.title}</p>
                                <div className='flex items-center '>
                                    <p className='font-semibold'>₹{val.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Product
