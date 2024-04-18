import {useUnit} from "effector-react";

import {seminars} from "@/shared/lib/seminars.ts";
import {routes} from "@/shared/routes";
import {Container} from "@/shared/ui";

export const SeminarPage = () => {
    const {seminarId} = useUnit(routes.seminar.$params);
    const seminar = seminars.find(seminar => seminar.id.toString() === seminarId);

    if (!seminar) {
        return (
            <Container>
                <div className='mt-[50px] text-3xl'> Неправильный ввод</div>
            </Container>
        )
    }

    return (
        <Container>
            <div className='mt-[50px] text-4xl font-bold'>{seminar.title}</div>
            <div className='mt-[30px] flex gap-x-[30px]'>
                <img src={seminar.imageSrc} alt="Seminar img" className='min-w-[300px] h-[250px] object-cover'/>
                <div>
                    <div className='font-bold text-sm'>{seminar.subtitle.slice(0, 200)}</div>
                    <div className='mt-[20px]'>
                        {seminar.dates.map(date =>
                            <div className='text-sm font-semibold'>{date}</div>
                        )}
                    </div>
                </div>
            </div>
            <div className='mt-[45px] flex items-center gap-x-[15px] font-bold text-3xl'>
                Программа
                <hr className='w-full'/>
            </div>
            {seminar.program.map(program =>
                <div className='mt-[20px]'>
                    <div className='font-bold'>
                        {program.title}
                        {' '} <span className='text-sky-500 text-lg'>{program.from}</span> - <span className='text-lg text-sky-500'>{program.to}</span>
                    </div>
                    <div className='mt-[5px] text-sm font-light'>{program.subtitle}</div>
                </div>
            )}
        </Container>
    )
}