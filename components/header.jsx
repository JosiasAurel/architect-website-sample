import React from "react"
import Link from "next/link"

import styles from "../styles/header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
                <Link href="/">
                    <a>/Home</a>
                </Link>
                <Link href="/gallery">
                    <a>/Gallery</a>
                </Link>
                <h1>ArchitX</h1>
                <Link href="/contact">
                    <a>/Contact</a>
                </Link>
                <Link href="/about">
                    <a>/About</a>
                </Link>
        </header>
    )
}

export default Header