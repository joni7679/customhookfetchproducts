import axios from 'axios';
import ShimmerEffect from './ShimmerEffect';
import useFetch from '../hooks/useFetch';
function Product() {
    const { data, error, loading } = useFetch(`https://api.escuelajs.co/api/v1/products`)

    if (loading) {
        return <ShimmerEffect />
    }
    if (error) {
        return <p className='text-red-x; capitalize text-center'>{error.message}</p>
    }
    return (
        <>
            <h1 className='text-center font-light text-4xl mt-5 capitalize text-blue-700'>Our Products</h1>
            <div className='container mx-auto px-6 py-5 lg-px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {data.map((val, index) => {
                    const { images, title, price } = val
                    return (
                        <div key={index} className='mx-w-md w-full p-3 rounded-2xl shadow-md'>
                            <div className='w-full h-[20rem]'>
                                <img src={images} alt={images} className='w-full h-full object-cover rounded-3xl' />
                            </div>
                            <div className='product-info'>
                                <p className='text-center text-xl font-semibold mt-5'>{title}</p>
                                <div className='flex items-center '>
                                    <p className='font-semibold'>₹{price}</p>
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
