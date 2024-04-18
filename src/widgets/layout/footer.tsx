import appStore from "@/assets/img/app_store.png";
import googlePlay from "@/assets/img/google_play.png";

import {Container} from "@/shared/ui";
import {FacebookLogo, InstagramLogo, TwitterLogo, TelegramLogo, WhatsappLogo, VkLogo} from "@/shared/ui/icons.tsx";

export const Footer = () => {
    return (
        <footer className='mt-[64px] pb-[45px] border-t border-t-gray-150'>
            <Container>
                <Contacts/>
                <Links/>
            </Container>
        </footer>
    )
}

const Contacts = () => {
    return (
        <div className='flex justify-between mt-[30px]'>
            <Socials/>
            <a href="tel:+998 (33) 6096009"
               className='text-7xl font-thin hover:text-sky-500 transition-colors duration-200'>
                +998 (33) 6096009
            </a>
            <Messengers/>
        </div>
    )
}

const Socials = () => {
    return (
        <div>
            <div className='font-semibold'>Социальные сети</div>
            <div className='mt-[15px] flex gap-x-[35px]'>
                <FacebookLogo width='30px'
                              className='cursor-pointer transition-colors hover:fill-sky-500 duration-200'/>
                <InstagramLogo width='30px'
                               className='cursor-pointer transition-colors hover:fill-sky-500 duration-200'/>
                <TwitterLogo width='30px' className='cursor-pointer transition-colors hover:fill-sky-500 duration-200'/>
            </div>
        </div>
    )
}

const Messengers = () => {
    return (
        <div>
            <div className='font-semibold'>Написать нам</div>
            <div className='mt-[15px] flex gap-x-[35px]'>
                <TelegramLogo width='30px'
                              className='cursor-pointer transition-colors hover:fill-sky-500 duration-200'/>
                <WhatsappLogo width='30px'
                              className='cursor-pointer transition-colors hover:fill-sky-500 duration-200'/>
                <VkLogo width='30px' className='cursor-pointer transition-colors hover:fill-sky-500 duration-200'/>
            </div>
        </div>
    )
}

export const Links = () => {
    return (
        <div className='mt-[30px] pt-[30px] flex justify-between border-t border-t-gray-150'>
            <div className='w-[80%] grid grid-cols-3 gap-y-4 justify-items-center font-semibold text-sm'>
                <div className={linkClass}>Бонусная система</div>
                <div className={linkClass}>О магазине</div>
                <div className={linkClass}>Новинки</div>

                <div className={linkClass}>Вопросы и ответы</div>
                <div className={linkClass}>Каталог</div>
                <div className={linkClass}>Семинары</div>

                <div className={linkClass}>Доставка и оплата</div>
                <div className={linkClass}>Privacy Policy</div>
                <div className={linkClass}>Контакты</div>
            </div>

            <div className='flex flex-col items-center gap-y-4'>
                <div className={appLinkClass}>
                    <img src={appStore} alt="app store" width={120} className='relative'/>
                </div>

                <div className={appLinkClass}>
                    <img src={googlePlay} alt="app store" width={120} className='relative'/>
                </div>
            </div>
        </div>
    )
}

const linkClass = 'cursor-pointer transition-colors duration-150 hover:text-sky-500';
const appLinkClass = 'cursor-pointer bg-black rounded-md relative ' +
    'before:absolute before:inset-0 before:bg-primary before:opacity-0 before:rounded-md ' +
    'before:transition-opacity before:duration-200 before:hover:opacity-80';