import React from "react"
import Image from "next/image"

import Header from "../components/header"
import Footer from "../components/footer"

import styles from "../styles/index.module.css"

const Index = () => {
    return (
        <>
            <div className={styles.shower}>
                <Header />
                <h1 className={styles.showerText}>
                Luxury at your service. <br/> In no time.
            </h1>
            </div>

            <Footer />
        </>
    )
}

export default Index