import React from 'react';
import { Meta } from 'utills/meta/Meta';

import { WrapperContent } from '@/components/layout/WrapperContent';
import BlockNews from '@/components/ui/BlockNews/BlockNews';
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs';
import { BreadcrumbProps } from '@/components/ui/Breadcrumbs/breadcrumbs.interface';
import BannerNews from '@/components/ui/NewsBanner/BannerNews';
import { usePosts } from '@/components/ui/lastNews/usePosts';

import { useCountPosts } from './useCountPosts';

const News = () => {
	const breadcrumbs: BreadcrumbProps[] = [
		{
			label: 'Главная',
			path: '/'
		},
		{
			label: 'Новости',
			path: '/news'
		}
	];

	const { count } = useCountPosts();

	return (
		<Meta description='Актуальные новости наших курсов только для вас' title='Новости'>
			<WrapperContent>
				<div className='flex flex-col'>
					<Breadcrumbs breadcrumbs={breadcrumbs} />
					<span className='py-10 text-[#0048BA] text-xl font-medium'>ВСЕГО НОВОСТЕЙ: {count}</span>
					<BannerNews />
					<BlockNews />
				</div>
			</WrapperContent>
		</Meta>
	);
};

export default News;
