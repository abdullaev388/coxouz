import React from "react";

import {ProductType} from "@/shared/lib/categories.ts";
import {AddToCartIcon} from "@/shared/ui/icons.tsx";

import {addToCartButtonPressed} from "./model.ts";

export const AddToCart = ({product}: { product: ProductType }) => {
    return (
        <button
            onClick={() => addToCartButtonPressed(product)}
            className='relative py-[6px] px-[12px] bg-sky-500 rounded-md hover:bg-sky-600 transition-colors duration-150 ease-in'>
            <AddToCartIcon width='22px' fill='#fff'/>
        </button>
    )
}

export const CustomAddToCart = ({product, children}: {children: React.ReactNode, product: ProductType}) => {
    return (
        <button
            onClick={() => addToCartButtonPressed(product)}
            className='text-white font-bold py-[6px] px-[12px] bg-sky-500 rounded-md hover:bg-sky-600 transition-colors duration-150 ease-in'>
            {children}
        </button>
    )
}