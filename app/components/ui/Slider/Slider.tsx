import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import styles from './Slider.module.scss'

interface ISlider {
    images: StaticImageData[],
    imageHeight?: number,
    imageWidth?: number,
}


const Slider: FC<ISlider> = ({ images, imageHeight = 100, imageWidth = 100 }) => {
    return (
        <div className='relative overflow-hidden h-44 w-full'>
            <div className={styles.absoluteItems}>
                <div className='flex flex-row justify-around w-1/2'>
                    {images.map((image) => {
                        return (<div className='w-36 h-36 flex justify-center items-center'>
                            <Image src={image} width={imageWidth} height={imageHeight} className={styles.imgSlider}></Image>
                        </div>)
                    })}
                </div>
                <div className='flex flex-row justify-around w-1/2'>
                    {images.map((image) => {
                        return (<div className='w-36 h-36 flex justify-center items-center'>
                            <Image src={image} width={imageWidth} height={imageHeight} className={styles.imgSlider}></Image>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    )
}
export default Slider