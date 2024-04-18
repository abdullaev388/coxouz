import {createRoutesView} from "atomic-router-react";

import {routes} from "@/shared/routes";

import {Layout} from "@/widgets/layout";

import {Home} from "@/pages/home";
import {CatalogPage} from "@/pages/catalog";
import {SeminarsPage} from "@/pages/seminars";
import {ContactsPage} from "@/pages/contacts";
import {SeminarPage} from "@/pages/seminar";
import {ProductPage} from "@/pages/product";

export const RoutesView = createRoutesView({
    routes: [
        {route: routes.home, view: Home, layout: Layout},
        {route: routes.catalog, view: CatalogPage, layout: Layout},
        {route: routes.seminars, view: SeminarsPage, layout: Layout},
        {route: routes.seminar, view: SeminarPage, layout: Layout},
        {route: routes.contacts, view: ContactsPage, layout: Layout},
        {route: routes.product, view: ProductPage, layout: Layout}
    ]
});