import React from "react"
import Link from "next/link"
import Header from "../components/header"
import Footer from "../components/footer"

import styles from "../styles/index.module.css"

const Index = () => {
    return (
        <>
            <Header />

            <h1 className={styles.showerText}>
                Luxury at your service. <br/> In no time.
            </h1>

            <Footer />
        </>
    )
}

export default Index