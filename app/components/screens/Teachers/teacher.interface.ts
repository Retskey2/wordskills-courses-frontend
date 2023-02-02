import { StaticImageData } from "next/image";

export interface ITeacher {
    _id: number,
    Name: string,
    RoleName: string,
    Email: string,
    Photo: StaticImageData
}
