import { createHistoryRouter } from 'atomic-router';
import { createBrowserHistory } from 'history';

import {routes as appRoutes} from "@/shared/routes";

const routes = [
    {path: "/", route: appRoutes.home},
    {path: "/catalog/:categoryName?", route: appRoutes.catalog},
    {path: "/product/:category/:productId", route: appRoutes.product},
    {path: "/seminars/", route: appRoutes.seminars},
    {path: "/seminars/:seminarId", route: appRoutes.seminar},
    {path: "/contacts", route: appRoutes.contacts}
];

const history = createBrowserHistory();

export const router = createHistoryRouter({routes});

router.setHistory(history);