import React from 'react';
import { Meta } from 'utills/meta/Meta';

import { WrapperContent } from '@/components/layout/WrapperContent';
import BlockNews from '@/components/ui/BlockNews/BlockNews';
import BannerNews from '@/components/ui/NewsBanner/BannerNews';

const News = () => (
	<Meta description='Актуальные новости наших курсов только для вас' title='Новости'>
		<WrapperContent>
			<div className='flex flex-col'>
				<span className='py-10'>ВСЕГО НОВОСТЕЙ: 222</span>
				<BannerNews />
				<BlockNews />
			</div>
		</WrapperContent>
	</Meta>
);

export default News;
