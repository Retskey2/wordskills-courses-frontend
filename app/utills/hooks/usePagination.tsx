import { useMemo } from 'react'

interface Pagination {
	totalCount: number
	pageSize: number
	siblingCount: number
	currentPage: number
}

export const usePagination = ({
	totalCount,
	pageSize,
	siblingCount = 1,
	currentPage,
}: Pagination) => {
	const paginationRange = useMemo(() => {
		const totalPageCount = Math.ceil(totalCount / pageSize)
		const totalPageNumbers = siblingCount + 5

		if (totalPageNumbers >= totalPageCount) {
			return range(1, totalPageCount)
		}
	})
}
