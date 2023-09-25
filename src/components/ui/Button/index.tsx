import {FC, MouseEvent, ReactNode} from "react";
import "./styles.scss";


type Props = {
    children: ReactNode,
    type?: "button" | "submit" | "reset" | undefined
    className?: string
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void,
    variant?: "ghost" | "outline" | "destructive",
    disabled?: boolean
}

const Button: FC<Props> = (props) => {
    return (
        <button disabled={props.disabled} type={props.type} onClick={props.onClick} className={`button-component ${props.variant} ${props.className}`}>
            {props.children}
        </button>
    );
};

export default Button;