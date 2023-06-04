import { useRouter } from 'next/router';
import React from 'react';

import { WrapperContent } from '@/components/layout/WrapperContent';

const NewsPost = () => {
	const router = useRouter();
	const newsId = typeof router.query?.id === 'string' ? router.query.id : '';
	return <WrapperContent>{newsId}</WrapperContent>;
};

export default NewsPost;
