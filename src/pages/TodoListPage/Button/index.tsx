import { ReactNode } from "react";
import styles from "./Button.module.css"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    backgroundColor: string;
    icon: string;
    onClick?: VoidFunction;
    children?: ReactNode;
}

export default function Button({backgroundColor, icon, children, ...rest}: Props){
    return <button
            {...rest} 
            style={{backgroundColor: backgroundColor}}
            className={styles.button}
            >
        <i 
        className={icon}> </i> {children}
        </button>
}