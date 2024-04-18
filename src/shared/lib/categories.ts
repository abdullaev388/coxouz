import c_e_explorer_dental_ultrasonic_surgical_system
    from "@/assets/img/products/C-Explorer_Dental_ultrasonic_surgical_system.jpg";

import c_clear_2_operating_microscope from "@/assets/img/products/C-CLEAR-2_Operating_Microscope.jpg";
import cp_1_dental_air_polisher from "@/assets/img/products/CP-1_Dental-Air-Polisher.jpg"
import c_fr1_endo_file_removal_system from "@/assets/img/products/C-FR1_Endo_file_removal_system.jpg"
import c_clear_standard_package_operating_microscope
    from "@/assets/img/products/C-CLEAR_Standard_package_Operating_Microscope.jpg";

import cx207_f_h65_caries_detention_handpiece_with_generator from "@/assets/img/products/CX207-F_H65_Caries_detection_Handpiece_with_generator.jpg";
import cx207_f_45_led_handpiece_with_generator from "@/assets/img/products/CX207-F_45°LED_HANDPIECE_WITH_GENERATOR.jpg";
import cx207_f_led_handpiece_with_generator from "@/assets/img/products/CX207-F_LED_HANDPIECE_WITH_GENERATOR.jpg";

import c_fill_mini_endodontic_obturation_system from "@/assets/img/products/C-FILL_mini_Endodontic_obturation_system.jpg"
import c_fill_endodontic_obturation_system from "@/assets/img/products/C-FILL_Endodontic_obturation_system.jpg";

import c_smart_mini_led_wireless_endo_motors from "@/assets/img/products/C-SMART-MINI(LED)_Wireless_Endo_motors.jpg";
import c_smart_i_pilot_endo_motor_with_apex_locator from "@/assets/img/products/C-SMART-I_PILOT_Endo_motor_with_Apex_locator.jpg";
import c_smart_i_pro_endo_motors from "@/assets/img/products/C-SMART-I_PRO_Endo_motors.jpg";
import c_smart_mini_ap_endo_motor_with_apex_locator from "@/assets/img/products/C-Smart-Mini_AP_Endo_motor_with_Apex_locator.jpg";

import cx249_21 from "@/assets/img/products/CX249-21.jpg";
import cx249_22 from "@/assets/img/products/CX249-22.jpg";
import cx249_23 from "@/assets/img/products/CX249-23.jpg";
import cx249_24 from "@/assets/img/products/CX249-24.jpg";

import c_root_1_6_root_apex_locators from "@/assets/img/products/C-ROOT_I_(VI)Root_Apex_locators.jpg";
import c_root_1_root_apex_locators from "@/assets/img/products/C-ROOT_I_Root_Apex_locators.jpg";

import s_one_pro_single_niti_reciprocation_file from "@/assets/img/products/S-ONE_Pro_Single_Niti_Reciprocation_file.jpg";
import sc_pro_dental_root_canal_instruments from "@/assets/img/products/SC-PRO_Dental_Root_Canal_lnstruments.jpg";
import sc_pro_lite_2018_dental_root_canal_instruments from "@/assets/img/products/SC-PRO_lite_2018_Dental_Root_Canal_lnstruments.jpg";

import c_puma_mini_dental_electrical_motor from "@/assets/img/products/C-PUMA_Mini_Dental_electrical_motor.jpg";
import c_puma_master_dental_electrical_motor from "@/assets/img/products/C-PUMA_master_Dental_electrical_motor.jpg";
import c_puma_int_plus_dental_electrical_motor from "@/assets/img/products/C-PUMA_Int+_Dental_electrical_motors.jpg";
import c_puma_int_dental_electrical_motor from "@/assets/img/products/C-PUMA_Int_Dental_electrical_motors.jpg";

import c_tw2_kit_universal_prosthetic_kit from "@/assets/img/products/C-TW2_Kit_Universal_Prosthetic_Kit.jpg";
import c_tw1_kit_dental_implant_torque_wrench_kit from "@/assets/img/products/C-TW1_Kit_Dental_Implant_Torque_Wrench_kit.jpg";
import c_sailor_pro_dental_implantation_system from "@/assets/img/products/C-SAILOR_PRO_Dental_implantation_system.jpg";
import c_sailor_dental_implantation_system from "@/assets/img/products/C-SAILOR_Dental_implantation_system.jpg";

import db686_swift_curing_light_ from "@/assets/img/products/DB686_Swift_Curing_light.jpg";
import db686_super_dual_led_curing_lights from "@/assets/img/products/DB686_SUPER_DUAL_LED_Curing_lights.jpg";
import db686_nano_curing_lights from "@/assets/img/products/DB686_NANO_Curing_light.jpg";
import db686_1b_plus_led_curing_lights from "@/assets/img/products/DB686-1B+_LED_Curing_lights.jpg";

import {idGenerator} from "@/shared/lib/id-generator.ts";

export enum CategoryName {
    ultrasonicSurgerySystems = 'ultrasonic-surgery-systems',
    hotProducts = 'hot-products',
    handpieces = 'handpieces',
    endodonticObturationSystems = 'endodontic-obturation-systems',
    operatingMicroscopes = 'operating-microscopes',
    endoMotors = 'endo-motors',
    dentalOperatingLights = 'dental-operating-lights',
    apexLocators = 'apex-locators',
    endoFiles = 'endo-files',
    dentalElectricalMotors = 'dental-electrical-motors',
    dentalImplantationSystems = 'dental-implantation-systems',
    ledCuringLight = 'led-curing-light'
}

export type ProductType = {
    id: number,
    title: string,
    price: number,
    category: CategoryName,
    imageUrl: string
}

export const categoriesTitle = {
    [CategoryName.ultrasonicSurgerySystems]: "Ультразвуковые хирургические системы" as const,
    [CategoryName.hotProducts]: "Горячие продукты" as const,
    [CategoryName.handpieces]: "Наконечники" as const,
    [CategoryName.endodonticObturationSystems]: "Эндодонтическая обтурационная системы" as const,
    [CategoryName.operatingMicroscopes]: "Операционные микроскопы" as const,
    [CategoryName.endoMotors]: "Эндо моторы" as const,
    [CategoryName.dentalOperatingLights]: "Стоматологические рабочие светильники" as const,
    [CategoryName.apexLocators]: "Апекс-локаторы" as const,
    [CategoryName.endoFiles]: "Эндо файлы" as const,
    [CategoryName.dentalElectricalMotors]: "Стоматологические электродвигатели" as const,
    [CategoryName.dentalImplantationSystems]: "Системы дентальной имплантации" as const,
    [CategoryName.ledCuringLight]: "Лампы для отверждения" as const
};

const getId = idGenerator();

export const ultrasonicSurgerySystems: Array<ProductType> = [
    {
        id: getId(),
        title: "Стоматологическая ультразвуковая хирургическая система C-Explorer",
        price: 1000,
        category: CategoryName.ultrasonicSurgerySystems,
        imageUrl: c_e_explorer_dental_ultrasonic_surgical_system
    }
];

export const hotProducts: Array<ProductType> = [
    {
        id: getId(),
        title: "Операционный микроскоп C-CLEAR-2",
        price: 1000,
        category: CategoryName.hotProducts,
        imageUrl: c_clear_2_operating_microscope
    },
    {
        id: getId(),
        title: "Стоматологический воздушный полировщик CP-1",
        price: 1000,
        category: CategoryName.hotProducts,
        imageUrl: cp_1_dental_air_polisher
    },
    {
        id: getId(),
        title: "Система удаления файлов CFR 1 Endo",
        price: 1000,
        category: CategoryName.hotProducts,
        imageUrl: c_fr1_endo_file_removal_system
    },
    {
        id: getId(),
        title: "Операционный микроскоп класса люкс C-CLEAR-1 в упаковке",
        price: 1000,
        category: CategoryName.hotProducts,
        imageUrl: c_clear_standard_package_operating_microscope
    }
];

export const handpieces: Array<ProductType> = [
    {
        id: getId(),
        title: "Наконечник для обнаружения кариеса CX207-F H65 с генератором",
        price: 1000,
        category: CategoryName.handpieces,
        imageUrl: cx207_f_h65_caries_detention_handpiece_with_generator
    },
    {
        id: getId(),
        title: "Cветодиодный наконечник cx207-f под углом 45° с генератором",
        price: 1000,
        category: CategoryName.handpieces,
        imageUrl: cx207_f_45_led_handpiece_with_generator
    },
    {
        id: getId(),
        title: "Cветодиодный наконечник cx207-f с генератором",
        price: 1000,
        category: CategoryName.handpieces,
        imageUrl: cx207_f_led_handpiece_with_generator
    }
];

export const endodonticObturationSystems: Array<ProductType> = [
    {
        id: getId(),
        title: "Мини-эндодонтическая обтурационная система C-FILL",
        price: 1000,
        category: CategoryName.endodonticObturationSystems,
        imageUrl: c_fill_mini_endodontic_obturation_system
    },
    {
        id: getId(),
        title: "Эндодонтическая обтурационная система C-FILL",
        price: 1000,
        category: CategoryName.endodonticObturationSystems,
        imageUrl: c_fill_endodontic_obturation_system
    }
];

export const operatingMicroscopes: Array<ProductType> = [
    {
        id: getId(),
        title: "Операционный микроскоп C-CLEAR-2",
        price: 1000,
        category: CategoryName.operatingMicroscopes,
        imageUrl: c_clear_2_operating_microscope
    },
    {
        id: getId(),
        title: "Операционный микроскоп в стандартной комплектации C-CLEAR",
        price: 1000,
        category: CategoryName.operatingMicroscopes,
        imageUrl: c_clear_standard_package_operating_microscope
    }
];

export const endoMotors: Array<ProductType> = [
    {
        id: getId(),
        title: "C-SMART-MINI (СВЕТОДИОДНЫЙ) Беспроводные эндо двигатели",
        price: 1000,
        category: CategoryName.endoMotors,
        imageUrl: c_smart_mini_led_wireless_endo_motors
    },
    {
        id: getId(),
        title: "ПИЛОТНЫЙ эндодвигатель C-SMART-I с апекс-локатором",
        price: 1000,
        category: CategoryName.endoMotors,
        imageUrl: c_smart_i_pilot_endo_motor_with_apex_locator
    },
    {
        id: getId(),
        title: "Эндодвигатели C-SMART-I PRO",
        price: 1000,
        category: CategoryName.endoMotors,
        imageUrl: c_smart_i_pro_endo_motors
    },
    {
        id: getId(),
        title: "C-Smart-Мини-электродвигатель AP Endo с апекс-локатором",
        price: 1000,
        category: CategoryName.endoMotors,
        imageUrl: c_smart_mini_ap_endo_motor_with_apex_locator
    }
]

export const dentalOperatingLights: Array<ProductType> = [
    {
        id: getId(),
        title: "CX249-21",
        price: 1000,
        category: CategoryName.dentalOperatingLights,
        imageUrl: cx249_21
    },
    {
        id: getId(),
        title: "CX249-22",
        price: 1000,
        category: CategoryName.dentalOperatingLights,
        imageUrl: cx249_22
    },
    {
        id: getId(),
        title: "CX249-23",
        price: 1000,
        category: CategoryName.dentalOperatingLights,
        imageUrl: cx249_23
    },
    {
        id: getId(),
        title: "CX249-24",
        price: 1000,
        category: CategoryName.dentalOperatingLights,
        imageUrl: cx249_24
    }
];

export const apexLocators: Array<ProductType> = [
    {
        id: getId(),
        title: "Локаторы вершины корня C-ROOT I (VI)",
        price: 1000,
        category: CategoryName.apexLocators,
        imageUrl: c_root_1_6_root_apex_locators
    },
    {
        id: getId(),
        title: "Локаторы вершины корня C-ROOT I",
        price: 1000,
        category: CategoryName.apexLocators,
        imageUrl: c_root_1_root_apex_locators
    }
];

export const endoFiles: Array<ProductType> = [
    {
        id: getId(),
        title: "Файл возвратно-поступательного движения S-ONE Pro Single Niti",
        price: 1000,
        category: CategoryName.endoFiles,
        imageUrl: s_one_pro_single_niti_reciprocation_file
    },
    {
        id: getId(),
        title: "Инструменты для лечения корневых каналов зубов SC-PRO",
        price: 1000,
        category: CategoryName.endoFiles,
        imageUrl: sc_pro_dental_root_canal_instruments
    },
    {
        id: getId(),
        title: "Инструменты для лечения корневых каналов зубов SC-PRO lite 2018",
        price: 1000,
        category: CategoryName.endoFiles,
        imageUrl: sc_pro_lite_2018_dental_root_canal_instruments
    }
];

export const dentalElectricalMotors: Array<ProductType> = [
    {
        id: getId(),
        title: "Зубоврачебный электродвигатель C-PUMA Mini",
        price: 1000,
        category: CategoryName.dentalElectricalMotors,
        imageUrl: c_puma_mini_dental_electrical_motor
    },
    {
        id: getId(),
        title: "Зубоврачебный электродвигатель C-PUMA master",
        price: 1000,
        category: CategoryName.dentalElectricalMotors,
        imageUrl: c_puma_master_dental_electrical_motor
    },
    {
        id: getId(),
        title: "Зубоврачебные электродвигатели C-PUMA Int+",
        price: 1000,
        category: CategoryName.dentalElectricalMotors,
        imageUrl: c_puma_int_plus_dental_electrical_motor
    },
    {
        id: getId(),
        title: "Центральный процессор обслуживает зубоврачебные электродвигатели",
        price: 1000,
        category: CategoryName.dentalElectricalMotors,
        imageUrl: c_puma_int_dental_electrical_motor
    }
];

export const dentalImplantationSystems: Array<ProductType> = [
    {
        id: getId(),
        title: "Универсальный протезный набор C-TW2 Kit",
        price: 1000,
        category: CategoryName.dentalImplantationSystems,
        imageUrl: c_tw2_kit_universal_prosthetic_kit
    },
    {
        id: getId(),
        title: "Комплект динамометрических ключей для зубных имплантатов CTW 1 комплект",
        price: 1000,
        category: CategoryName.dentalImplantationSystems,
        imageUrl: c_tw1_kit_dental_implant_torque_wrench_kit
    },
    {
        id: getId(),
        title: "Система дентальной имплантации C-SAILOR PRO",
        price: 1000,
        category: CategoryName.dentalImplantationSystems,
        imageUrl: c_sailor_pro_dental_implantation_system
    },
    {
        id: getId(),
        title: "Система дентальной имплантации C-SAILOR",
        price: 1000,
        category: CategoryName.dentalImplantationSystems,
        imageUrl: c_sailor_dental_implantation_system
    }
];

export const ledCuringLight: Array<ProductType> = [
    {
        id: getId(),
        title: "Лампа быстрого отверждения DB686",
        price: 1000,
        category: CategoryName.ledCuringLight,
        imageUrl: db686_swift_curing_light_
    },
    {
        id: getId(),
        title: "Лампы для отверждения SUPER DUAL LED DB686",
        price: 1000,
        category: CategoryName.ledCuringLight,
        imageUrl: db686_super_dual_led_curing_lights
    },
    {
        id: getId(),
        title: "Нанотверждающий светильник DB686",
        price: 1000,
        category: CategoryName.ledCuringLight,
        imageUrl: db686_nano_curing_lights
    },
    {
        id: getId(),
        title: "DB 686-1B+ СВЕТОДИОДНЫЕ лампы для отверждения",
        price: 1000,
        category: CategoryName.ledCuringLight,
        imageUrl: db686_1b_plus_led_curing_lights
    }
];

export const categories = {
    [CategoryName.ultrasonicSurgerySystems]: ultrasonicSurgerySystems,
    [CategoryName.hotProducts]: hotProducts,
    [CategoryName.handpieces]: handpieces,
    [CategoryName.endodonticObturationSystems]: endodonticObturationSystems,
    [CategoryName.operatingMicroscopes]: operatingMicroscopes,
    [CategoryName.endoMotors]: endoMotors,
    [CategoryName.dentalOperatingLights]: dentalOperatingLights,
    [CategoryName.apexLocators]: apexLocators,
    [CategoryName.endoFiles]: endoFiles,
    [CategoryName.dentalElectricalMotors]: dentalElectricalMotors,
    [CategoryName.dentalImplantationSystems]: dentalImplantationSystems,
    [CategoryName.ledCuringLight]: ledCuringLight
}