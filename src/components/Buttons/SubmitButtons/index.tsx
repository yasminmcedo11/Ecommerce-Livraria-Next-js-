"use client"

import styles from "./styles.module.css"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    className?: string
}

export default function SubmitButton(props: ButtonProps) {
    const buttonText = props.text

    return (
        <button {...props} className={`${styles.button} ${props.className}`}>
            {buttonText}
        </button>
    )
}