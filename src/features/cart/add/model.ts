import {createEvent, sample} from "effector";

import {ProductType} from "@/shared/lib/categories.ts";

import {cartModel} from "@/entities/cart";

export const addToCartButtonPressed = createEvent<ProductType>();

sample({
    clock: addToCartButtonPressed,
    fn: product => ({productId: product.id, category: product.category}),
    target: cartModel.addToCart
});