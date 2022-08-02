import { StaticImageData } from "next/image";

export interface teacher {
    img: StaticImageData,
    name: string,
}

export interface IProjectItem {
    id:number,
    image: StaticImageData,
    title: string, 
    subtitle: string, 
    text: string,
    teachers?: teacher[],
    duration: string;
    old: string,
}

export interface IProject {
    title: string,
    items: IProjectItem[]
}