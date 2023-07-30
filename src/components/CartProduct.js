import { MinusSmallIcon, PlusSmallIcon, XCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

const CartProduct = ({ product }) => {
    const { setItemQuantity, removeItem } = useShoppingCart();

    return (
        <div className='flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 hover:shadow-lg hover:border-opacity-50 border border-opacity-0 rounded-md p-4 bg-neutral-900'>
            <Link href={`/products/${product.id}`} className='flex items-center space-x-4 group'>
                <div className='relative w-20 h-20 group-hover:scale-110 transition-transform'>
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        style={{ objectFit: "contain" }}
                    />
                </div>
                <p className='font-semibold text-xl group-hover:underline'>
                    {product.name}
                </p>
            </Link>
            <div className='flex items-center mt-2 sm:mt-0 sm:justify-between sm:w-2/3 sm:ml-4'>
                <div className='flex items-center space-x-3 flex-grow sm:justify-center'>
                    <button onClick={() => setItemQuantity(product.id, product.quantity - 1)} disabled={product.quantity <= 1} className="p-1 rounded-md hover:bg-rose-100 hover:text-rose-500">
                        <MinusSmallIcon className="w-6 h-6 flex-shrink-0" />
                    </button>
                    <p className="font-semibold text-xl">{product.quantity}</p>
                    <button onClick={() => setItemQuantity(product.id, product.quantity + 1)} className="p-1 rounded-md hover:bg-rose-100 hover:text-green-500">
                        <PlusSmallIcon className="w-6 h-6 flex-shrink-0" />
                    </button>
                </div>
                <div className='flex items-center sm:ml-4'>
                    <p className='font-semibold text-xl'>
                        {product.formattedPrice}
                    </p>
                    <button onClick={() => removeItem(product.id)} className='ml-2 hover:text-red-500'>
                        <XCircleIcon className='w-6 h-6 flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity' />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartProduct;
