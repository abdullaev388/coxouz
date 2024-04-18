import clsx from "clsx";

import {Link} from "atomic-router-react";

import {routes} from "@/shared/routes";
import {Container} from "@/shared/ui";
import {CatalogIcon, DollarIcon, PhoneIcon} from "@/shared/ui/icons.tsx";

const navItemHover = 'hover:text-sky-500 transition-colors duration-200 cursor-pointer';

export const Navbar = () => {
    return (
        <nav className='h-[47px]'>
            <Container>
                <ul className='h-full flex items-center'>
                    <li className={clsx('text-sm', navItemHover)}>
                        <Link to={routes.catalog} className='flex items-center gap-x-[8px]'>
                            <CatalogIcon height='25px' /> Каталог товаров
                        </Link>
                    </li>

                    <li className={clsx('flex items-center gap-x-[8px] text-sm ml-[35px]', navItemHover)}>
                        <DollarIcon height='25px' /> Прайс-лист
                    </li>

                    <li className={clsx('ml-[60px]', navItemHover)}>Новинки</li>
                    <li className={clsx('ml-[35px]', navItemHover)}>
                        <Link to={routes.seminars}>Семинары</Link>
                    </li>
                    <li className={clsx('ml-[35px]', navItemHover)}>Бонусы</li>
                    <li className={clsx('ml-[35px]', navItemHover)}>
                        <Link to={routes.contacts}>Контакты</Link>
                    </li>

                    <li className={clsx('ml-auto flex items-center gap-x-[8px]', navItemHover)}>
                        <PhoneIcon height='25px' />
                        <a href="tel:+998336096009" className='font-bold'>+998 (33) 6096009</a>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}