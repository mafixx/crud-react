import { ReactNode } from "react";
import styles from "./Button.module.css"

type Props ={
    backgroundColor: string;
    icon: string;
    onClick: VoidFunction;
    children?: ReactNode;
}

export default function Button(props: Props){
    return <button 
            style={{backgroundColor: props.backgroundColor}}
            className={styles.button}
            onClick={props.onClick}
            >
            {props.children}
        <i 
        className={props.icon}> </i> 
        </button>
}