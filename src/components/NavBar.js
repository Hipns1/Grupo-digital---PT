import styles from "../Styles/NavBar.module.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () => {
        const bar = document.getElementById("bar");
        const close = document.getElementById("close");
        setIsOpen(!isOpen);
        if (isOpen) {
            bar.style.display = "none";
            close.style.display = "block";
        } else if (isOpen === false) {
            bar.style.display = "block";
            close.style.display = "none";
        }
    }

    const handleClose = () => {
        handleMenu();
        document.getElementById("check").click();
    }

    useEffect(() => {
        handleMenu();
        document.getElementById("close").style.display = "none";
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={styles.nav}>
            <nav className={styles.nav_container}>
                <div 
                className={styles.nav_logo}>
                    <Link to="/home"><h1>Cocktails.</h1></Link>
                </div>
                <input type="checkbox" id="check" className={styles.nav_menu} />
                <label
                    htmlFor="check"
                    className={styles.nav_label}
                    onClick={() => handleMenu()}>
                    <i className="fa-solid fa-bars" id="bar"></i>
                    <i className="fa-solid fa-xmark" id="close"></i>
                </label>
                <div className={styles.nav_options} id="nav_options">
                    <a
                        onClick={() => handleClose()}
                        href="/favorite">
                        Favorites
                    </a>
                </div>
            </nav>
        </motion.div>
    )
}

export default NavBar