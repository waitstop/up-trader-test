import {Dispatch, ReactNode, SetStateAction, useRef, useEffect} from "react";
import './styles.scss'

type Props = {
    children: ReactNode,
    className?: string,
    state: boolean,
    setState: Dispatch<SetStateAction<boolean>>
}

const Modal = ({children, className, state, setState}: Props) => {
    const ref = useRef<any>(null)

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (!ref.current) return
            if (ref.current.contains(e.target)) return
            setState(false)
        }

        document.addEventListener('click', handleClickOutside, true)

        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [setState])

    if (state) {
        return (
            <div ref={ref} className={`modal ${className ? className : ''}`}>
                <button className={"modal__close"} onClick={() => setState(false)}>&#10006;</button>
                {children}
            </div>
        )
    }
    return (<></>)
};

export default Modal;