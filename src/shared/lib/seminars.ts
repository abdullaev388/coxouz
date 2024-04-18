import seminar_1 from "@/assets/img/seminars/seminar_1.jpg";
import seminar_2 from "@/assets/img/seminars/seminar_2.jpg";
import seminar_3 from "@/assets/img/seminars/seminar_3.jpg";
import seminar_4 from "@/assets/img/seminars/seminar_4.jpg";
import seminar_5 from "@/assets/img/seminars/seminar_5.jpg";
import seminar_6 from "@/assets/img/seminars/seminar_6.jpg";
import seminar_7 from "@/assets/img/seminars/seminar_7.jpg";

import {idGenerator} from "@/shared/lib/id-generator.ts";

export type SeminarType = {
    id: number,
    imageSrc: string,
    title: string,
    subtitle: string,
    dates: Array<string>,
    program: Array<SeminarProgramPart>
}

export type SeminarProgramPart = {
    title: string,
    subtitle?: string,
    from: string,
    to: string
}

const genirateId = idGenerator();

const makeSeminar = (imageSrc: SeminarType['imageSrc']) => {
    return {
        id: genirateId(),
        imageSrc,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit!",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet iure minima molestiae tempora vel. A facere impedit ipsa, quis sapiente vitae. Aut eveniet necessitatibus saepe vitae voluptates? Aliquid amet assumenda blanditiis cum dignissimos distinctio dolore dolores eos esse ex harum, illum ipsa natus pariatur perferendis provident quae quas rem rerum sapiente sed similique tempore temporibus unde veniam voluptas voluptatum? Ab accusamus, adipisci aliquid assumenda autem blanditiis debitis deserunt dolores error, expedita fugit illo incidunt laboriosam laborum nihil nulla quaerat quam quisquam saepe sed suscipit veritatis vitae voluptates. A debitis doloremque eius itaque officia officiis? Aperiam cumque deserunt dignissimos distinctio est fugit hic id magnam perspiciatis praesentium? Explicabo, molestiae voluptatibus? Beatae debitis distinctio dolorem doloremque minus non quis ratione sapiente temporibus voluptate? Ad architecto culpa distinctio dolorum explicabo nostrum perspiciatis quis recusandae sapiente! A autem corporis cupiditate dolorum eveniet expedita facere in laborum modi molestias nihil obcaecati quidem rerum, sunt suscipit voluptate voluptatem? Adipisci debitis eveniet necessitatibus quam reprehenderit rerum similique. At autem corporis cupiditate debitis deserunt error est et excepturi explicabo facere fuga inventore itaque magnam natus nemo non odit officia provident, quae quia quibusdam recusandae reiciendis, rerum sed tempora ut voluptatibus. Ab eaque modi odit tenetur vel. Ad animi atque beatae dolor dolores dolorum ea earum eos est id illo incidunt inventore laboriosam, laudantium maxime minus odit repellat, repudiandae rerum sequi tempore temporibus veniam veritatis voluptas voluptatum. Adipisci debitis earum error facere fuga fugit hic quibusdam quidem. Autem distinctio, eum explicabo impedit nam qui quidem suscipit unde veritatis voluptatum!",
        dates: ["26 августа 09:00-18:00", "27 августа 09:00-18:00"],
        program: [
            {
                title: "Регистрация",
                subtitle: "Регистрация участников",
                from: "09:00",
                to: "09:30"
            },
            {
                title: "Лекционная часть",
                subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet iure minima molestiae tempora vel. A facere impedit ipsa, quis sapiente vitae. Aut eveniet necessitatibus saepe vitae voluptates? Aliquid amet assumenda blanditiis cum dignissimos distinctio dolore dolores eos esse ex harum, illum ipsa natus pariatur perferendis provident quae quas rem rerum sapiente sed similique tempore temporibus unde veniam voluptas voluptatum? Ab accusamus, adipisci aliquid assumenda autem blanditiis debitis deserunt dolores error, expedita fugit illo incidunt laboriosam laborum nihil nulla quaerat quam quisquam saepe sed suscipit veritatis vitae voluptates. A debitis doloremque eius itaque officia officiis? Aperiam cumque deserunt dignissimos distinctio est fugit hic id magnam perspiciatis praesentium? Explicabo, molestiae voluptatibus? Beatae debitis distinctio dolorem doloremque minus non quis ratione sapiente temporibus voluptate? Ad architecto culpa distinctio dolorum explicabo nostrum perspiciatis quis recusandae sapiente! A autem corporis cupiditate dolorum eveniet expedita facere in laborum modi molestias nihil obcaecati quidem rerum, sunt suscipit voluptate voluptatem? Adipisci debitis eveniet necessitatibus quam reprehenderit rerum similique. At autem corporis cupiditate debitis deserunt error est et excepturi explicabo facere fuga inventore itaque magnam natus nemo non odit officia provident, quae quia quibusdam recusandae reiciendis, rerum sed tempora ut voluptatibus. Ab eaque modi odit tenetur vel. Ad animi atque beatae dolor dolores dolorum ea earum eos est id illo incidunt inventore laboriosam, laudantium maxime minus odit repellat, repudiandae rerum sequi tempore temporibus veniam veritatis voluptas voluptatum. Adipisci debitis earum error facere fuga fugit hic quibusdam quidem. Autem distinctio, eum explicabo impedit nam qui quidem suscipit unde veritatis voluptatum!",
                from: "09:30",
                to: "11:30"
            },
            {
                title: "Кофе брейк",
                from: "11:30",
                to: "12:00"
            },
            {
                title: "Протоколы полировки",
                subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ducimus, et in iste maiores molestias mollitia nesciunt nisi optio vel? Delectus eaque ipsum magnam nobis officia perferendis provident quae recusandae!",
                from: "12:00",
                to: "14:00"
            },
            {
                title: "Обед",
                from: "14:00",
                to: "15:00"
            },
            {
                title: "Практическая часть",
                subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet iure minima molestiae tempora vel. A facere impedit ipsa, quis sapiente vitae. Aut eveniet necessitatibus saepe vitae voluptates? Aliquid amet assumenda blanditiis cum dignissimos distinctio dolore dolores eos esse ex harum, illum ipsa natus pariatur perferendis provident quae quas rem rerum sapiente sed similique tempore temporibus unde veniam voluptas voluptatum? Ab accusamus, adipisci aliquid assumenda autem blanditiis debitis deserunt dolores error, expedita ful!",
                from: "15:00",
                to: "18:00"
            },
            {
                title: "2 день ",
                subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ducimus, et in iste maiores molestias mollitia nesciunt nisi optio vel? Delectus eaque ipsum magnam nobis officia perferendis provident quae recusandae!",
                from: "09:00",
                to: "18:00"
            },
        ]
    }
}

export const seminars: Array<SeminarType> = [
    makeSeminar(seminar_1),
    makeSeminar(seminar_2),
    makeSeminar(seminar_3),
    makeSeminar(seminar_4),
    makeSeminar(seminar_5),
    makeSeminar(seminar_6),
    makeSeminar(seminar_7)
]