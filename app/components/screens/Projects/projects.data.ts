import { IProject, teacher } from './projects.interface';
import teachers from '../../../../pages/teachers';
import Photo from '@/assets/image/teacher-photo.png'
import ProjectImage from '@/assets/image/project-photo.png'

export const ProjectContent:IProject = {
    title: 'IProject',
    items: [
    {
        id: 1,
        image: ProjectImage,
        title: 'WorldSkills Junior',
        subtitle: 'Подготовка к соревнованиям WorldSkills Junior',
        text: 'Обучение включает в себя базовую теоретическую подготовку, выполнение проектов соместно с преподавателем и разбор заданий предыдущих годов.',
        teachers: 
            [
                {  
                img: Photo,
                name: 'Каспин Дмитрий'
                },
            ]
        ,
        duration: '3-9 месяцев',
        old: '12-16 лет',
    },
    {
        id: 2,
        image: ProjectImage,
        title: 'WorldSkills',
        subtitle: 'Подготовка к соревнованиям WorldSkills Junior',
        text: 'Обучение включает в себя базовую теоретическую подготовку, выполнение проектов соместно с преподавателем и разбор заданий предыдущих годов.',
        teachers: 
        [
            {  
            img: Photo,
            name: 'Каспин Дмитрий'
            },
        ]
    ,
        duration: '3-6 месяцев',
        old: '16-21 лет',
    },
    {
        id: 3,
        image: ProjectImage,
        title: 'WorldSkills Exam',
        subtitle: 'Подготовка к демо-экзамену',
        text: 'Обучение включает в себя базовую теоретическую подготовку, выполнение проектов соместно с преподавателем и разбор заданий предыдущих годов.',
        teachers: 
        [
            {  
            img: Photo,
            name: 'Каспин Дмитрий'
            },
            {  
                img: Photo,
                name: 'Каспин Дмитрий'
            },
        ]
    ,
        duration: 'от 1 месяца',
        old: '16-21 год',
    },
    {
        id: 4,
        image: ProjectImage,
        title: 'WorldSkills Teacher',
        subtitle: 'Подготовка преподавателей по стандартам WorldSkills',
        text: "WorldSkills Education осущетвляет обучение преподавателей проведению и организации соревнований с послудующей выдачей свидетельства о повышении квалификации.Аналогично проводится обучение HardSkills для последующей подготовки студентов к соревнованиям или сдаче демо-экзамена.",
        teachers: 
        [
            {  
            img: Photo,
            name: 'Каспин Дмитрий'
            },
        ]
    ,
        duration: '1-6 месяцев',
        old: 'от 21 года',
    },
    {
        id: 5,
        image: ProjectImage,
        title: 'WorldSkills Basic',
        subtitle: 'Основы программирования',
        text: "Все курсы разделены на модули. Благодаря такой системе вы можете выбрать те модули, которые наиболее важны вам. Такая система позволяет начинать обучение с нуля или углублять свои знания в определенных аспектах.Так же в рамках всех курсов вы можете выбрать только те темы, которые вам необходимы. ", 
        duration: 'Неограниченно',
        old: 'Любой',
    },
    {
        id: 6,
        image: ProjectImage,
        title: 'WorldSkills One',
        subtitle: 'Профессиональные консультации WorldSkills',
        text: "WorldSkills Education осущетвляет обучение преподавателей проведению и организации соревнований с послудующей выдачей свидетельства о повышении квалификации.Аналогично проводится обучение HardSkills для последующей подготовки студентов к соревнованиям или сдаче демо-экзамена.",
        duration: '1-6 месяцев',
        old: 'от 21 года',
    },
],
    
}
