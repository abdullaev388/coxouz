import {useUnit} from "effector-react";

import {routes} from "@/shared/routes";
import {categories, categoriesTitle, CategoryName} from "@/shared/lib/categories.ts";
import {Container} from "@/shared/ui";

import {ProductsList} from "@/widgets/product";

export const CatalogPage = () => {
    const {categoryName} = useUnit(routes.catalog.$params);

    const categoryTitle = categoryName
        ? categoryName in categoriesTitle ? categoriesTitle[categoryName] : "Не валидная категория"
        : "Каталог"

    const products = categoryName && categoryName in categories
        ? categories[categoryName as keyof typeof categories]
        : !categoryName ? Object.values(categories).flat() : [];

    return (
        <div className='py-[40px] bg-[#eeeeee]'>
            <Container>
                <div className='text-3xl font-bold'>{categoryTitle}</div>
                <div className='mt-[64px]'>
                    <ProductsList products={products}/>
                </div>

                {categoryName === CategoryName.operatingMicroscopes &&
                    <div className='mt-[80px]'>
                        <video src="/microscope.mov" controls className='h-[618px] w-full object-contain'/>
                    </div>
                }

                {categoryName === CategoryName.endoFiles &&
                    <div className='mt-[80px]'>
                        <video src="/endofile.m4v" controls className='h-[618px] w-full object-contain'/>
                    </div>
                }
            </Container>
        </div>
    )
}