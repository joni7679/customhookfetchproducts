import React from 'react'

const ShimmerEffect = () => {
    let arry = new Array(12).fill(0)
    return (
        <>
            <div className='container mx-auto px-6 py-5 lg-px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {arry.map((val, index) => {
                    return (
                        <div key={index} className='mx-w-md w-full p-3 rounded-2xl shadow-md animate-pulse bg-gray-200'>
                            <div className='w-[20rem] h-[20rem] animate-pulse bg-gray-200'>
                            </div>
                            <div className='product-info'>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>

    )
}

export default ShimmerEffect
