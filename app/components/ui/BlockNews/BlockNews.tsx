import React from 'react';

import { usePosts } from '../lastNews/usePosts';

import styles from './BlockNews.module.scss';
import { BlockNewsItem } from './BlockNewsItem';

const BlockNews = () => {
	const { posts, isLoading } = usePosts();
	return (
		<div className={styles['block-news']}>
			{posts &&
				posts.map((post) => (
					<BlockNewsItem
						id={post.id}
						title={post.title}
						image={post.imgSrc}
						description={post.body}
						isLoading={isLoading}
						key={post.id}
					/>
				))}
		</div>
	);
};

export default BlockNews;
