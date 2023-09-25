import './styles.scss'
import {ChangeEvent, FC, HTMLInputTypeAttribute} from "react";

type Props = {
    label?: String
    className?: string
    placeholder?: string
    type: HTMLInputTypeAttribute,
    accept?: string
    multiple?: boolean
    value?: string | number | readonly string[] | undefined
    defaultValue?: string | number | readonly string[] | undefined
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
    required?: boolean,
    name?: string
}
const Input: FC<Props> = props => {
    return (
        <label className={`label-component ${props.className}`}>
            {props.label && <span>{props.label} {props.required && <span style={{color: 'rgb(var(--warn))'}}>*</span>}</span>}
            <input defaultValue={props.defaultValue}
                   value={props.value}
                   placeholder={props.placeholder}
                   onChange={props.onChange}
                   required={props.required}
                   type={props.type}
                   name={props.name}
                   accept={props.accept}
                   multiple={props.multiple}
            />
        </label>
    );
};

export default Input;