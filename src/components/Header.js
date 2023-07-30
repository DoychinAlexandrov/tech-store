import Logo from './Logo'
import Link from 'next/link'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useShoppingCart } from 'use-shopping-cart'


const Header = () => {
    const { formattedTotalPrice, cartCount } = useShoppingCart()
    return (
        <header className='sticky top-0 bg-black z-10 '>
            <div className='container mx-auto p-6 flex justify-between'>
                <Logo />
                <Link href='/cart' className='flex items-center space-x-1 text-slate-300 hover:text-gray-500'>
                    <div className='relative'>
                        <ShoppingCartIcon className='w-7 h-7 flex-shrink-0' />
                    </div>
                    <p className='text-lg'>
                        {formattedTotalPrice}{" "}
                        <span className='text-sm text-slate-300'>({cartCount})</span>
                    </p>
                </Link>
            </div>
        </header>
    )
}

export default Header