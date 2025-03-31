"use client"

import styles from "./styles.module.css"
import Link from "next/link";

interface SectionsProps {
    genre: string; 
  }

export default function ShowMoreButton({ genre }: SectionsProps) {
    const buttonText = "Ver mais"

    return (
        <Link href={`/genres/${genre}`}>
            <button className={styles.button}>
                {buttonText}
            </button>
        </Link>
    )
}