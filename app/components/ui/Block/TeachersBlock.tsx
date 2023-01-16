import cn from "classnames";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import EmailIcon from '@/assets/image/email.svg'
interface ITeachersBlock {
    FIO: string,
    RoleName: string,
    Email: string,
    Photo: StaticImageData,
    Aligment: "Left" | "Right"
}

const TeachersBlock: FC<ITeachersBlock> = ({ Email, FIO, Photo, RoleName, Aligment }) => {
    let AligmentClass: string[] = [

    ]
    if (Aligment === 'Left') {
        AligmentClass.push('justify-start')
    }
    else {
        AligmentClass.push('flex-row-reverse', 'mr-[50px]')
    }
    return (<div className={cn(
        AligmentClass,
        'flex',
        'gap-[34px]',
        'mt-[40px]',
        'mb-[40px]'
    )}>
        <div className={cn('relative', 'max-w-[170px]')}>
            <Image src={Photo} alt="Expert photo" className={cn('max-h-[144px]', 'z-1')}></Image>
            <div className={cn(
                'border-blue-600',
                'border',
                'w-[102px]',
                'h-[102px]',
                'absolute',
                'top-[85px]',
                'left-[70px]',
            )}></div>
        </div>
        <div className={cn('mr-16')}>
            <h2 className={cn(
                'text-2xl',
                'text-blue-700'
            )}>{FIO}</h2>
            <p className={cn(
                'text-gray-500',
                'text-lg',
                'mt-2',
            )}>{RoleName}</p>
            <div className={cn('flex', 'flex-row', 'gap-[10px]', 'mt-6')}>
                <Image src={EmailIcon} alt="Email icon" />
                <p className={cn('text-blue-600', 'text-xl')}>{Email}</p>
            </div>

        </div>

    </div>)
}

export default TeachersBlock