import React from "react"
import Link from "next/link"

import styles from "../styles/header.module.css"

const Header = () => {
    return (
        <header>
                <Link href="/">
                    <a>/Home</a>
                </Link>
                <Link href="/gallery">
                    <a>/Gallery</a>
                </Link>
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