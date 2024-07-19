import styles from "./footer.module.css"
import logo from "../../assets/mylogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
const Footer=()=>{
    return(
        <>
        <div className={styles.footer}>
        <div className={styles.footertop}>
            <div className={styles.topleft}>
            <img src={logo} alt="logo" />
            <p>i am a beginner react.js developer</p>
            </div>
            <div className={styles.topright}>
                <div className={styles.emailinput}>
                <input type="email" placeholder="Enter your email"/>
                </div>
               <div className={styles.subscribe}>   Subscribe </div>
            </div>
        </div>
        <hr />
        <div className={styles.footerbottom}>
            <p className={styles.bottomleft}>2024 Vaidehi parmar. All rights reserved.</p>
            <div className={styles.bottomright}>
                <p>Term of Services</p>
                <p>Privact policy</p>
                <p>Connect with me</p>
            </div>
        </div>
        </div>
        </>
    )
}
export default Footer