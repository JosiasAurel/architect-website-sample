import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import styles from "../styles/index.module.css"

const About = () => {
    return (
        <>
        <Header />

        <div className={styles.dos}>
            <span className={styles.whats}>
                <h1>What I do ?</h1>
            <p>I build great architectural designs for homes.</p>
            </span>

            <span className={styles.whats}>
                <h1>Who Am I ?</h1>
                <p>My name is Sammy Rogers. <br/> I am a trained professional from Polytech in Architectural Enginnering. <br/>
                    I have always been passionate about architecture since i have been a kid. I love what i do.
                </p>
            </span>
        </div>
        <Footer />
        </>
    )
}

export default  About