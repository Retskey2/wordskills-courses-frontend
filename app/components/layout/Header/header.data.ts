import { IHeader } from './header.interface';

export const HeaderContent: IHeader = {
	title: 'IHeader',
	items: [
		{
			link: '/courses',
			title: 'Курсы'
		},
		{
			link: '/projects',
			title: 'Проекты'
		},
		{
			link: '/teachers',
			title: 'Преподаватели'
		},
		{
			link: '/news',
			title: 'Новости'
		},
		{
			link: '/contacts',
			title: 'Контакты'
		},
		{
			link: '/about',
			title: 'О нас'
		},
		{
			link: '/auth',
			title: 'Войти'
		}
	]
};
