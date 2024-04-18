import {ProductType} from "@/shared/lib/categories.ts";
import {Product} from "@/entities/product";
import {AddToCart} from "@/features/cart/add";

export const ProductsList = ({products}: { products: Array<ProductType> }) => {
    return (
        <div className='flex flex-wrap gap-5'>
            {products.map((product, index) =>
                <Product key={index} product={product} actions={<AddToCart product={product} />}/>
            )}
        </div>
    )
}