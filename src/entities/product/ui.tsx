import React from "react";

import {Link} from "atomic-router-react";
import {routes} from "@/shared/routes/";

import {ProductType, categoriesTitle} from "@/shared/lib/categories.ts";

export const Product = ({product, actions}: {product: ProductType, actions: React.ReactNode}) => {
    return (
        <div className='bg-white w-[220px] shadow-lg'>
            <img src={product.imageUrl} alt={product.title} className='h-[220px] w-[220px] object-contain'/>
            <div className='p-[10px]'>
                <div className='text-xs text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap'>
                    {categoriesTitle[product.category]}
                </div>
                <Link
                    to={routes.product} params={{ category: product.category, productId: product.id.toString() }}
                    className='mt-[5px] font-semibold hover:text-sky-500 h-[50px] overflow-hidden text-ellipsis line-clamp-2'>
                    {product.title}
                </Link>
                <div className='mt-[10px] text-xl font-bold flex justify-between'>
                    <div>{product.price} сум</div>
                    {actions}
                </div>
            </div>
        </div>
    )
}