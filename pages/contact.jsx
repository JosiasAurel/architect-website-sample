import React, { useState } from "react"

import Header from "../components/header"

import styles from "../styles/index.module.css"

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("")

    const handleFormSubmit = (e) => {
        e.preventDefault()
        alert("See ya")
    }

    return (
        <>
        <Header />

        <div className={styles.formContainer}>
            <form onSubmit={handleFormSubmit} className={styles.contactForm}>
                <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter your name" />

                <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />

                <textarea 
                value={msg} 
                onChange={(e) => setMsg(e.target.value)} cols="30" rows="10"></textarea>
                <button>Send</button>
            </form>
        </div>
        </>
    )
}

export default Contact