import {createRoute} from "atomic-router";

import {CategoryName} from "@/shared/lib/categories.ts";

export const routes = {
    home: createRoute(),
    catalog: createRoute<{ categoryName?: CategoryName }>(),
    seminars: createRoute(),
    seminar: createRoute<{ seminarId: string }>(),
    contacts: createRoute(),
    product: createRoute<{ category: CategoryName, productId: string }>()
}