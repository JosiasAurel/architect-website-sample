import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import styles from "../styles/gallery.module.css"
import Image from "next/image"

const Gallery = () => {
    return (
        <div className={styles.page}>
            <Header />
            <h1 style={{textAlign: "center"}}>Here is my amazing works.</h1>
            <div className={styles.imageGrid}>
                <div>
                    <Image src="/h1.jpg" width="300px" height="300px" />
                </div>
                <div>
                    <Image src="/h2.jpg" width="300px" height="300px" />
                </div>
                <div>
                    <Image src="/h3.jpg" width="300px" height="300px" />
                </div>
                <div>
                    <Image src="/h4.jpg" width="300px" height="300px" />
                </div>
                <div>
                    <Image src="/shower.jpg" width="300px" height="300px" />
                </div>
                <div>
                    <Image src="/h1.jpg" width="300px" height="300px" />
                </div>
                <div>
                    <Image src="/h2.jpg" width="300px" height="300px" />
                </div>
                <div>
                    <Image src="/h3.jpg" width="300px" height="300px" />
                </div>
                <div>
                    <Image src="/h4.jpg" width="300px" height="300px" />
                </div>
                <div>
                    <Image src="/shower.jpg" width="300px" height="300px" />
                </div>
                <div>
                    <Image src="/h1.jpg" width="300px" height="300px" />
                </div>
                <div>
                    <Image src="/h2.jpg" width="300px" height="300px" />
                </div>
                <div>
                    <Image src="/h3.jpg" width="300px" height="300px" />
                </div>
                <div>
                    <Image src="/h4.jpg" width="300px" height="300px" />
                </div>
                <div>
                    <Image src="/shower.jpg" width="300px" height="300px" />
                </div>
                <div>
                    <Image src="/h1.jpg" width="300px" height="300px" />
                </div>
                <div>
                    <Image src="/h2.jpg" width="300px" height="300px" />
                </div>
                <div>
                    <Image src="/h3.jpg" width="300px" height="300px" />
                </div>
                <div>
                    <Image src="/h4.jpg" width="300px" height="300px" />
                </div>
                <div>
                    <Image src="/shower.jpg" width="300px" height="300px" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Gallery