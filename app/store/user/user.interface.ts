import { IUser } from "@/utills/typescript/types/user.types"


export interface IUserState {
    login: string;
    email: string
    isAdmin: boolean
}

export interface ITokens {
    accessToken: string
    refreshToken: string
}

export interface IInitialState {
    user: IUserState | null
    isLoading: boolean
}

export interface IEmailPassword {
    login: string
    email: string
    passwordHash: string
}

export interface IAuthResponse extends ITokens{
    user: IUser & {
        isAdmin: boolean
    }

}