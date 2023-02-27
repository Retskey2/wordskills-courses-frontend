import React from 'react'

import { BlockNewsItem } from './BlockNewsItem'

const BlockNews = () => {
	return (
		<div className="flex gap-6 mt-8">
			<BlockNewsItem />
			<BlockNewsItem />
		</div>
	)
}

export default BlockNews
