export interface IUser {
    _id: string
    login: string
    email: string
    password: string
    regDate: Date;
    isAdmin: boolean
}
