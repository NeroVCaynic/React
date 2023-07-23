import React from 'react';

function ProductCard({product}) {
    return (
        <div className='flex flex-col items-center m-4 bg-neutral-800 hover:bg-neutral-700 rounded-lg shadow-md md:flex-row md:max-w-full'>
            <img className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' src={product.image ? product.image : `https://placehold.co/600x400/png`} alt="ProductImg" />
            <div className='flex flex-col flex-1 justify-between p-4 leading-normal'>
                <h5 className="mb-2 text-xl font-bold tracking-tight">{product.title}</h5>
                <p className="mb-3 font-normal text-gray-400 overflow-hidden">{product.description}</p>
                <button className='btn-blue'>Price: ${product.price}</button>
            </div>
        </div>
    )
}

export default ProductCard