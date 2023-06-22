export interface IPost {
    id: number;
    title: string;
    body: string;
    imgSrc: string;
    intro: string;
    createdAt: string;
    category: {
        id: number;
        name: string;
        img_src: string;
        icon_src: string
    }
}