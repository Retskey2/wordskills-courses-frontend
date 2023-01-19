import cn from 'classnames'
import Image, { StaticImageData } from 'next/image'
import {
	ChangeEventHandler,
	FC,
	InputHTMLAttributes,
	SyntheticEvent,
	useState,
} from 'react'

import SearchIcon from '@/assets/image/search-icon.svg'
import SortIcon from '@/assets/image/sort-icon.svg'

import Filter from './Filter'

interface IFilter {
	name: string
	isVisible: boolean
}
interface ISearchBar {
	placeholder?: string
	filtersArray: IFilter[]
}

const SearchBar: FC<ISearchBar> = ({ placeholder, filtersArray }) => {
	const [filters, setFilters] = useState([...filtersArray])
	const [sortVisible, setSortVisible] = useState(false)

	const sortClicked = () => {
		setSortVisible(!sortVisible)
		const filter = [...filters]
		setFilters([...filter])
	}

	const checkboxChange = (e: any) => {
		updateFilterVisibility(e.target.name)
	}
	const updateFilterVisibility = (name: string) => {
		const filter = [...filters]
		filter.map((filt) => {
			if (filt.name === name) {
				filt.isVisible = !filt.isVisible
			}
		})

		setFilters([...filter])
	}

	return (
		<>
			<div className={cn('flex', 'items-center')}>
				<div
					className={cn(
						'border',
						'border-blue-500',
						'rounded',
						'h-[52px]',
						'flex',
						'items-center',
						'w-10/12'
					)}
				>
					<div className={cn('m-3')}>
						<Image alt="" src={SearchIcon}></Image>
					</div>
					<input
						placeholder={placeholder}
						type="search"
						className={cn(
							'border-none',
							'w-full',
							'text-xl',
							'h-full',
							'pb-4',
							'text-blue-500',
							'active:outline-none',
							'focus:outline-none',
							'placeholder:text-blue-500'
						)}
					></input>
				</div>
				<div className={cn('p-3', 'relative')}>
					<Image
						alt=""
						src={SortIcon}
						onClick={sortClicked}
						className="cursor-pointer"
					></Image>
					<div
						className={cn(
							'absolute',
							'bg-white',
							'border',
							'border-blue-500',
							'py-4',
							'px-8',
							'flex',
							'flex-col',
							'flex-wrap',
							'gap-2',
							'rounded-3xl',
							'z-1',
							'right-[50px]',
							sortVisible ? 'visible' : 'hidden'
						)}
					>
						{filters.map((item) => {
							return (
								<>
									<div
										className={cn(
											'flex',
											'flex-row',
											'gap-4',
											'items-center',
											'text-xl'
										)}
									>
										<input
											className={cn('w-6', 'h-6')}
											type="checkbox"
											checked={item.isVisible}
											onChange={checkboxChange}
											name={item.name}
										></input>
										<p> {item.name}</p>
									</div>
								</>
							)
						})}
					</div>
				</div>
			</div>
			<div className={cn('flex', 'flex-wrap', 'flex-row', 'my-6', 'gap-2')}>
				{filters?.map((value) => {
					if (value.name !== '' && value.isVisible === true) {
						return (
							<Filter
								filter={{ name: value.name }}
								updateFilterVisibility={updateFilterVisibility}
							></Filter>
						)
					} else {
						return <></>
					}
				})}
			</div>
		</>
	)
}

export default SearchBar
