import {Container} from "@/shared/ui";

export const ContactsPage = () => {
    return (
        <div>
            <Container>
                <div className='mt-[80px] flex justify-between items-start'>
                    <div>
                        <div className='font-extrabold text-4xl'>Связаться с нами</div>
                        <div className='grid grid-cols-2 gap-y-[50px] w-[600px] mt-[50px] font-bold text-xl'>
                            <div className='text-2xl'>Наш адрес</div>
                            <div>Mustaqillik Shox ko’chasi 88 A Darxon Business Center</div>

                            <div>Телефон</div>
                            <a href='tel:+998336096009' className='text-lg w-fit v font-medium text-sky-500 hover:text-sky-600'>
                                +998336096009
                            </a>

                            <div>Почта</div>
                            <a href='mailto:tausstone@gmail.uz' className='text-lg w-fit v font-medium text-sky-500 hover:text-sky-600'>
                                tausstone@gmail.uz
                            </a>

                            <div>Время работы</div>
                            <div className='font-medium text-lg'>Работаем круглосуточно</div>
                        </div>
                    </div>

                    <div className='w-[400px] p-[20px] shadow-lg border border-solid border-gray-300 rounded-md'>
                        <div className='font-bold text-2xl'>Напишите нам</div>

                        <input type="text" placeholder='Ваше имя'
                               className='outline-0 w-full my-2 py-[6px] px-[14px] border border-solid rounded-[8px] hover:border-gray-400 transition-colors duration-200' />
                        <input type="text" placeholder='Почта'
                               className='outline-0 w-full my-2 py-[6px] px-[14px] border border-solid rounded-[8px] hover:border-gray-400 transition-colors duration-200'/>
                        <input type="text" placeholder='Телефон'
                               className='outline-0 w-full my-2 py-[6px] px-[14px] border border-solid rounded-[8px] hover:border-gray-400 transition-colors duration-200'/>
                        <input type="text" placeholder='Сообщение'
                               className='outline-0 w-full my-2 py-[6px] px-[14px] border border-solid rounded-[8px] hover:border-gray-400 transition-colors duration-200'/>

                        <button className='
                            mt-6 p-[8px] font-semibold border-2 border-solid border-sky-500 rounded-md
                            hover:text-white hover:bg-sky-500 transition-colors duration-150 ease-in
                        '>
                            Отправить сообщение
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    )
}