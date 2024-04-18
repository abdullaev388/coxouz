import {createEvent, createStore, sample} from "effector";

import {cartModel} from "@/entities/cart";

export const cartCardOpenChanged = createEvent<boolean>();

export const $cartCardOpen = createStore(false);

sample({
    clock: cartCardOpenChanged,
    filter: opened => !opened,
    target: $cartCardOpen
});

sample({
    source: cartModel.$cartTotalItems,
    clock: cartCardOpenChanged,
    filter: (cartTotalItems, opened) => Boolean(cartTotalItems) && opened,
    fn: () => true,
    target: $cartCardOpen
});

sample({
    clock: cartModel.$cartTotalItems,
    filter: cartTotalItems => cartTotalItems === 0,
    fn: () => false,
    target: $cartCardOpen
});

