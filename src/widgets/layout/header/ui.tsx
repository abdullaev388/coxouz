import React from "react";
import clsx from "clsx";

import {StoreValue} from "effector";
import {useUnit} from "effector-react";
import {Link} from "atomic-router-react";

import * as HoverCard from "@radix-ui/react-hover-card";

import logo from "@/assets/img/logo.png";

import {routes} from "@/shared/routes";
import {categoriesTitle} from "@/shared/lib/categories.ts";
import {Container} from "@/shared/ui";
import {SearchIcon, UserIcon, GiftIcon, CartIcon, CloseIcon} from "@/shared/ui/icons.tsx";

import {cartModel} from "@/entities/cart";

import {$cartCardOpen, cartCardOpenChanged} from "./model.ts";

export const Header = () => {
    return (
        <header className='h-[72px] bg-primary sticky top-0 z-10'>
            <Container>
                <div className='h-full flex items-center'>
                    <Link to={routes.home}>
                        <img src={logo} alt="coxo uz" className='w-96'/>
                    </Link>

                    <SearchProducts/>

                    <div className='ml-[20px] h-full w-[100px] cursor-pointer flex items-center justify-center'>
                        <UserIcon width='35px' className='fill-white'/>
                    </div>

                    <div className='h-full w-[100px] ml-[10px] cursor-pointer flex items-center justify-center'>
                        <GiftIcon width='35px' className='fill-white'/>
                    </div>

                    <CartHoverCard />
                </div>
            </Container>
        </header>
    )
}

const SearchProducts = () => {
    return (
        <div
            className='w-full flex items-center gap-5 py-[6px] px-[14px] ml-[20px] border-solid border border-[#ffffff80] rounded-[8px] hover:border-white transition-colors duration-200'>
            <input placeholder='Поиск' type="text" className='w-full bg-transparent outline-0 text-white'/>
            <button>
                <SearchIcon height='25px' className='fill-[#ffffff80] hover:fill-white transition-colors duration-200'/>
            </button>
        </div>
    )
}

const CartHoverCard = () => {
    const open = useUnit($cartCardOpen);

    return (
        <HoverCard.Root openDelay={0} closeDelay={0} open={open} onOpenChange={cartCardOpenChanged}>
            <HoverCard.Trigger asChild>
                <CartData/>
            </HoverCard.Trigger>
            <HoverCard.Portal>
                <HoverCard.Content align='end'>
                    <CartItemsList/>
                </HoverCard.Content>
            </HoverCard.Portal>
        </HoverCard.Root>
    )
}

const CartData = React.forwardRef((props, ref: React.Ref<HTMLDivElement>) => {
    const [totalSum, totalItems] = useUnit([cartModel.$cartTotalSum, cartModel.$cartTotalItems]);

    return (
        <div
            className={clsx('relative h-full w-[250px] ml-[20px] flex items-center gap-x-[10px]', totalItems && 'cursor-pointer')}
            ref={ref} {...props}>
            <CartIcon className='fill-white w-[35px] min-w-[35px]'/>
            {!totalItems && <span className='text-white text-sm'>В корзине нет товаров</span>}
            {Boolean(totalItems) &&
                <div className='
                    bg-green-600 text-sm text-white h-[20px] w-[20px] rounded-full flex items-center justify-center
                    absolute top-3 left-5
                '>
                    {totalItems}
                </div>
            }
            {Boolean(totalItems) &&
                <div className='text-white text-sm'>
                    Сумма
                    <div>{totalSum} сум</div>
                </div>
            }
        </div>
    )
});

const CartItemsList = () => {
    const products = useUnit(cartModel.$cartProducts);
    return (
        <div className='w-[450px] bg-white border border-solid border-gray-100 shadow-lg p-[20px]'>
            <div className='font-medium text-xl'>Корзина</div>
            <div className='mt-[20px] flex flex-col'>
                {products.map(product => <CartItem key={product.id} product={product}/>)}
            </div>
        </div>
    )
}

const CartItem = ({product}: { product: StoreValue<typeof cartModel.$cartProducts>[number] }) => {
    return (
        <div className='flex py-[10px] border-b border-solid border-gray-200 last:border-none'>
            <img src={product.imageUrl} alt={product.title} className='h-[50px] w-[50px]'/>
            <div className='ml-[15px] w-[50%]'>
                <div className='text-xs text-gray-500'>{categoriesTitle[product.category]}</div>
                <div
                    className='mt-[3px] text-sm font-medium bg-primary text-transparent bg-clip-text'>{product.title}</div>
            </div>
            <div className='ml-[20px]'>
                <div className='font-extrabold text-lg'>{product.amount * product.price}</div>
                <div className='text-xs text-gray-500'>{product.amount} шт</div>
            </div>
            <CloseIcon height={25} width={25}
                       onClick={() => cartModel.removeFromCart({productId: product.id, category: product.category})}
                       className='ml-auto self-center cursor-pointer fill-gray-500 transition-colors duration-150 hover:fill-gray-400'/>
        </div>
    )
}