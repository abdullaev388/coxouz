import {createStore, createEvent} from "effector";

import {ProductType, CategoryName, categories} from "@/shared/lib/categories.ts";

type CartItem = {
    productId: ProductType['id'],
    category: CategoryName,
    amount: number
}

export const addToCart = createEvent<Omit<CartItem, 'amount'>>();

export const removeFromCart = createEvent<Omit<CartItem, 'amount'>>();

export const $cart = createStore<Array<CartItem>>([]);

export const $cartTotalItems = $cart.map(cart => cart.reduce((total, item) => total + item.amount, 0));

export const $cartTotalSum = $cart.map(cart =>
    cart.reduce((total, cartItem) => {
        const item = categories[cartItem.category as keyof typeof categories].find(item => item.id === cartItem.productId);
        if (!item) {
            return total;
        }
        return total + item.price * cartItem.amount;
    }, 0)
);

export const $cartProducts = $cart.map(cart =>
    cart.map(item => {
        const product = categories[item.category as keyof typeof categories].find(product => product.id === item.productId);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return {...product!, amount: item.amount}
    })
);

$cart.on(addToCart, (cart, addItem) => {
    const itemIndex = cart.findIndex(item => item.productId === addItem.productId);
    if (itemIndex === -1) {
        return [...cart, {...addItem, amount: 1}];
    }

    cart[itemIndex] = {...cart[itemIndex], amount: cart[itemIndex].amount + 1};
    return [...cart];
});

$cart.on(removeFromCart, (cart, removeItem) =>
    cart.filter(item => item.productId !== removeItem.productId)
);