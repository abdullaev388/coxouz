import {RouterProvider} from "atomic-router-react";

import {RoutesView} from "@/pages";

import  "./main.css";
import {router} from "./model.ts";

export const App = () => {
    return (
        <RouterProvider router={router}>
            <RoutesView />
        </RouterProvider>
    )
}