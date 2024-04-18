import {Link} from "atomic-router-react";

import {seminars, SeminarType} from "@/shared/lib/seminars.ts";
import {routes} from "@/shared/routes";
import {Container} from "@/shared/ui";

export const SeminarsPage = () => {
    return (
        <div>
            <div className='bg-primary py-[35px]'>
                <Container>
                    <div className='text-white font-extrabold text-4xl'>Семинары</div>
                </Container>
            </div>
            <div className='mt-[65px]'>
                <Container>
                    <div className='font-extrabold text-4xl'>Новые семинары</div>
                    <div className='mt-[30px] font-bold text-sm'>
                        Обучение стоматологов, курсы по стоматологии, семинары, лекции, тренинги, повышение
                        квалификации.
                    </div>
                    <div className='mt-[16px] font-bold text-sm'>
                        Добро пожаловать на курсы! Особенность наших курсов заключается в том, что мы даем возможность
                        все полученные теоритические знания применить на практике под наблюдением наших специалистов.
                        Это дает уверенность в дальнейшей работе врачом и поможет Вам лучше усвоить весь пройденный
                        материал. Мы не просто даем знания, мы обучаем мануальным навыкам!
                    </div>

                    <div>
                        {seminars.map(seminar => <Seminar seminar={seminar}/>)}
                    </div>
                </Container>
            </div>
        </div>
    )
}

const Seminar = ({seminar}: { seminar: SeminarType }) => {
    return (
        <div className='py-[40px] flex gap-x-[30px] last:border-none border-b border-b-gray-200'>
            <img src={seminar.imageSrc} alt="Seminar" className='min-w-[155px] h-[155px] object-cover'/>
            <div>
                <Link className='text-sky-500 text-xl font-semibold hover:text-sky-600' to={routes.seminar}
                      params={{seminarId: seminar.id.toString()}}>
                    {seminar.title}
                </Link>
                <div className='mt-[15px] text-gray-500 text-sm'>{seminar.subtitle.slice(0, 200)}</div>
                <div className='mt-[5px] font-bold text-sm'>Даты проведения</div>
                {seminar.dates.map(date =>
                    <div className='mt-[2px] text-sm font-semibold'>{date}</div>
                )}
            </div>
        </div>
    )
}