
import { ButtonHTMLAttributes, CSSProperties, InputHTMLAttributes } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IFieldProps {
    placeholder: string;
    error?: any
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputPropsField {} 



export interface IUploadField {
    folder?: string
    value?: string
    onChange: (...event: any[]) => void
    placeholder: string
    error?: FieldError
    style?: CSSProperties
    isNoImage?: boolean
}