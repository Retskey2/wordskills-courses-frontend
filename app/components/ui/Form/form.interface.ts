import { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface IFieldProps {
	placeholder: string;
	error?: FieldError | undefined;
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps;
type TypeTextAreaPropsField = InputHTMLAttributes<HTMLTextAreaElement> & IFieldProps;

export interface IField extends TypeInputPropsField {}
export interface ITextArea extends TypeTextAreaPropsField {}
