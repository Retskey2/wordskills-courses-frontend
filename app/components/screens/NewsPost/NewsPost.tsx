import { Skeleton } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import { WrapperContent } from '@/components/layout/WrapperContent';
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs';
import { BreadcrumbProps } from '@/components/ui/Breadcrumbs/breadcrumbs.interface';

import { usePost } from './usePost';

const NewsPost = () => {
	const router = useRouter();
	const newsId = typeof router.query?.id === 'string' ? router.query.id : '';

	const { post, isLoading } = usePost(+newsId);
	const breadcrumbs: BreadcrumbProps[] = [
		{
			label: 'Новости',
			path: '/news'
		},
		{
			label: `${post?.title.slice(0, 20).concat('...')}`,
			path: `/courses/${newsId}`
		}
	];

	return (
		<WrapperContent>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			{post && !isLoading ? (
				<div className='mt-8'>
					<Image src={`/${post?.imgSrc}`} width={1200} height={500} />
					<h1 className='text-[#0048BA] font-medium text-2xl mt-12 '>{post.title}</h1>
					<p className=' max-w-[1200px] mt-8 leading-8 font-light text-3xl'>{post.body}</p>
				</div>
			) : (
				<div>
					<Skeleton className='w-full' width={500} />
					<Skeleton className='w-full' width={30} />
					<Skeleton className='w-full' width={30} />
					<Skeleton className='w-full' width={30} />
					<Skeleton className='w-full' width={30} />
				</div>
			)}
		</WrapperContent>
	);
};

export default NewsPost;
