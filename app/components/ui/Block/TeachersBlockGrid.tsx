import cn from "classnames";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface ITeacherBlock {
    ID: number
    FIO: string,
    RoleName: string,
    Photo: StaticImageData
}

interface ITeachersBlockGrid {
    Blocks: ITeacherBlock[]
}

const TeachersBlockGrid: FC<ITeachersBlockGrid> = ({ Blocks }) => {
    return (<div className={cn(
        'flex', 'gap-0', 'flex-wrap', 'flex-row', 'mt-12', 'mb-12', 'items-center'
    )}>
        {
            Blocks.map(({ FIO, Photo, RoleName, ID }) => {
                return (
                    <div key={ID} className={cn(
                        'basis-1/4', 'min-w-[200px]', 'mb-6'
                    )}>
                        <div className={cn('flex', 'justify-center', 'flex-col', 'items-center')}>
                            <div className={cn(
                                'relative', 'mt-[20px]'
                            )}>
                                <Image src={Photo} alt="Expert photo" className={cn('z-1')} height={129} width={129}></Image>
                                <div className={cn(
                                    'border-blue-600',
                                    'border',
                                    'w-[89px]',
                                    'h-[89px]',
                                    'absolute',
                                    'top-[-20px]',
                                    'left-[-40px]',
                                )}></div>
                            </div>
                            <h2 className={cn('max-w-[150px]', 'text-center', 'text-xl', 'text-blue-700')}>{FIO}</h2>
                            <p className={cn('text-base', 'text-gray-500')}>{RoleName}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>)
}

export default TeachersBlockGrid