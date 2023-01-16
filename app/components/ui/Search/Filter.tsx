import cn from 'classnames'
import { Dispatch, FC, SetStateAction } from 'react'
import Image, { StaticImageData } from "next/image";


import XIcon from '@/assets/image/x-icon.svg'
interface IFilters {
    filter: IFilter,
    updateFilterVisibility(name: string): void
}
interface IFilter {
    name: string,
    value?: string,
}

const Filter: FC<IFilters> = ({ filter, updateFilterVisibility }) => {
    return (
        <div
            className={cn(
                'flex', 'items-center', 'rounded-[200px]', 'bg-blue-600/25', 'w-fit', 'text-blue-500', 'text-xl', 'px-6', 'py-[0.3rem]'
            )}
        >
            <p>{filter.name}</p>
            <div className={cn('pl-8')} onClick={() => updateFilterVisibility(filter.name)}>
                <Image alt='' src={XIcon}></Image>
            </div>


        </div>
    )
}

export default Filter
