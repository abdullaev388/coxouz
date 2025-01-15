import {useUnit} from "effector-react";

import {categories} from "@/shared/lib/categories.ts";
import {routes} from "@/shared/routes";
import {Container} from "@/shared/ui";

import {CustomAddToCart} from "@/features/cart/add";

export const ProductPage = () => {
    const {category, productId} = useUnit(routes.product.$params)

    const products = categories[category as keyof typeof categories];
    const product = products?.find(product => product.id.toString() === productId);
    if (!products || !product) {
        return (
            <Container>
                <div className='mt-[20px] text-2xl font-semibold'>Неверная ссылка</div>
            </Container>
        )
    }

    return (
        <div className='bg-[#eeeeee]'>
            <Container>
                <div className='py-[80px] flex gap-x-[43px]'>
                    <img src={product.imageUrl} alt={product.title} className='min-w-[276px] h-[276px] object-contain'/>
                    <div>
                        <div className='flex gap-x-[40px] items-center'>
                            <div className='font-bold text-3xl w-[500px]'>{product.title}</div>
                            <CustomAddToCart product={product}>В КОРЗИНУ</CustomAddToCart>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}