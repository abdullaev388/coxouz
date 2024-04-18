import React from "react";
import {Link} from "atomic-router-react";

import ultrasonicSurgerySystem from "@/assets/img/categories/ultrasonic_surgery_system.png";
import hotProduct from "@/assets/img/categories/hot_product.png";
import handpiece from "@/assets/img/categories/handpiece.png";
import operatingMicroscope from "@/assets/img/categories/operating_microscope.png";
import endoMotor from "@/assets/img/categories/endo_motor.png";
import endoFile from "@/assets/img/categories/endo_file.png";
import endodonticObturationSystem from "@/assets/img/categories/endodontic_obturation_system.png";
import apexLocator from "@/assets/img/categories/apex_locator.png";
import dentalImplantaionSystem from "@/assets/img/categories/dental_implantaion_system.png";
import dentalElectricalMotor from "@/assets/img/categories/dental_electrical_motor.png";
import ledCuringLight from "@/assets/img/categories/led_curing_light.png";
import dentalOperatingLight from "@/assets/img/categories/dental_operating_light.png";

import {routes} from "@/shared/routes";
import {categoriesTitle, CategoryName, endoMotors} from "@/shared/lib/categories.ts";
import {Container} from "@/shared/ui";
import {
    BonusIcon,
    CalendarIcon,
    CashBackIcon,
    ClinicIcon,
    DiscountIcon,
    ExchangeIcon,
    FreeDeliveryIcon,
    ProductsIcon
} from "@/shared/ui/icons.tsx";

import {ProductsList} from "@/widgets/product";

export const Home = () => {
    return (
        <>
            <Categories/>
            <NewProducts />
            <CompanyInfo/>
            <BonusSystem/>
        </>
    )
}

const Categories = () => {
    return (
        <section className='py-[64px] bg-[#eeeeee]'>
            <Container>
                <div
                    className='grid grid-cols-3 bg-dentistRoom bg-center bg-cover border-[5px] border-solid border-white'>
                    <Category name={CategoryName.ultrasonicSurgerySystems} image={ultrasonicSurgerySystem}/>
                    <Category name={CategoryName.hotProducts} image={hotProduct}/>
                    <Category name={CategoryName.handpieces} image={handpiece}/>

                    <Category name={CategoryName.endodonticObturationSystems} image={endodonticObturationSystem}/>
                    <Category name={CategoryName.operatingMicroscopes} image={operatingMicroscope}/>
                    <Category name={CategoryName.endoMotors} image={endoMotor}/>


                    <Category name={CategoryName.dentalOperatingLights} image={dentalOperatingLight}/>
                    <Category name={CategoryName.apexLocators} image={apexLocator}/>
                    <Category name={CategoryName.endoFiles} image={endoFile}/>

                    <Category name={CategoryName.dentalElectricalMotors} image={dentalElectricalMotor}/>
                    <Category name={CategoryName.dentalImplantationSystems} image={dentalImplantaionSystem}/>
                    <Category name={CategoryName.ledCuringLight} image={ledCuringLight}/>
                </div>
            </Container>
        </section>
    )
}

const NewProducts = () => {
    return (
        <div className='py-[43px]'>
            <Container>
                <div className='font-extrabold text-4xl'>Новинки</div>
                <div className='p-[7px] mt-[20px] bg-[#f6f8f9] h-fit w-fit'>
                    <ProductsList products={endoMotors} />
                </div>
            </Container>
        </div>
    )
}

const CompanyInfo = () => {
    return (
        <div className='bg-primary h-[300px]'>
            <Container>
                <div className='h-full flex justify-between items-center'>
                    <Info title='Нас знают с 2015 года'
                          subtitle='Нас знают, поэтому большинство клиентов приезжают из других городов.'
                          icon={<CalendarIcon width='150px'/>}/>

                    <Info title='Бесплатная доставка'
                          subtitle='При заказе на сумму более 500.000 сум доставка осуществляется по всему Узбекистану бесплатно'
                          icon={<FreeDeliveryIcon width='200px'/>}/>

                    <Info title='Более 1000 товаров'
                          subtitle='Ежедневно мы пополняем наш склад товарами, это позволяет обладать широчайшим ассортиментом'
                          icon={<ProductsIcon width='200px'/>}/>

                    <Info title='Более 100 клиник с нами'
                          subtitle='Наш опыт и возможности позволяют оснастить ваш кабинет с нуля, за несколько часов'
                          icon={<ClinicIcon width='150px'/>}/>
                </div>
            </Container>
        </div>
    )
}

const BonusSystem = () => {
    return (
        <div className='mt-[64px]'>
            <Container>
                <div className='flex gap-x-[30px] items-end'>
                    <div className='text-4xl font-bold'>Бонусная система</div>
                    <button className='
                        relative text-xs font-bold uppercase h-[30px] px-[10px] border-2 border-solid border-sky-500 rounded-md
                        hover:text-white hover:bg-sky-500 transition-colors duration-200 ease-out
                    '>
                        <span className='relative'>Подробней о бонусах</span>
                    </button>
                </div>

                <div className='mt-[43px] flex items-center justify-between'>
                    <Bonus title='Получайте больше бонусов повышая статус' icon={<BonusIcon height='100px'/>}/>

                    <Bonus title='Вернем до 7% от суммы покупки на бонусный счет'
                           icon={<CashBackIcon height='100px'/>}/>

                    <Bonus title='Выгодный курс, один бонус равняется 100 сум' icon={<ExchangeIcon height='100px'/>}/>

                    <Bonus title='Можно оплачивать до 100% стоимости покупки бонусами'
                           icon={<DiscountIcon height='100px'/>}/>
                </div>
            </Container>
        </div>
    )
}

const Bonus = ({title, icon}: { title: string, icon: React.ReactNode }) => {
    return (
        <div className='flex flex-col w-[250px]'>
            {icon}
            <div className='text-center mt-[10px]'>{title}</div>
        </div>
    )
}

const Info = ({title, subtitle, icon}: { title: string, subtitle: string, icon: React.ReactNode }) => {
    return (
        <div className='flex items-start gap-x-[15px] w-[250px]'>
            {icon}
            <div>
                <div className='text-white font-bold text-xl'>{title}</div>
                <div className='mt-[5px] text-white text-sm'>{subtitle}</div>
            </div>
        </div>
    )
}

const Category = ({name, image}: { name: CategoryName, image: string }) => {
    const title = categoriesTitle[name];

    return (
        <Link to={routes.catalog} params={{categoryName: name}}>
            <div className='
                relative flex items-center justify-between max-h-[130px] p-[20px] border-[5px] border-solid border-white
                before:absolute before:bg-primary before:inset-0 before:opacity-80
            '>
                <div className='relative text-white font-bold text-lg'>{title}</div>
                <img src={image} alt={title} className='relative h-[100px]'/>
            </div>
        </Link>
    )
}
