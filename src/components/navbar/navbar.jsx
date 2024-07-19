import styles from "./navbar.module.css";
import logo from "../../assets/mylogo.png";
import { useRef, useState } from "react";
import underline from "../../assets/line.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faXmark} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [menu, setmenu] = useState("home");
  const menuref=useRef();
  const openmenu=()=>{
    menuref.current.style.right="0";
  }
  const closemenu=()=>{
    menuref.current.style.right="-350px";
  }
  return (
    <>
      <div className={styles.navbar}>
        <img src={logo} alt="logo" />
        <FontAwesomeIcon icon={faBars} className={styles.navopen} onClick={openmenu} />
        <ul ref={menuref} className={styles.navmenu}>
        <FontAwesomeIcon icon={faXmark} className={styles.navclose} onClick={closemenu}/>
          <li>
            <AnchorLink className={styles.anchorlink} href="#home">
              <p onClick={() => setmenu("home")}>Home</p>
            </AnchorLink>
            {menu === "home" ? <img src={underline} alt="" /> : <></>}
          </li>
          <li>
            <AnchorLink className={styles.anchorlink} offset={50} href="#about">
              <p onClick={() => setmenu("about")}>About Me</p>
            </AnchorLink>
            {menu === "about" ? <img src={underline} alt="" /> : <></>}
          </li>
          <li>
            <AnchorLink className={styles.anchorlink} offset={50} href="#services">
              <p onClick={() => setmenu("services")}>Services</p>
            </AnchorLink>
            {menu === "services" ? <img src={underline} alt="" /> : <></>}
          </li>
          <li>
            <AnchorLink className={styles.anchorlink} offset={50} href="#work">
              <p onClick={() => setmenu("work")}>Portfolio</p>
            </AnchorLink>
            {menu === "work" ? <img src={underline} alt="" /> : <></>}
          </li>
          <li>
            <AnchorLink className={styles.anchorlink} offset={50} href="#contact">
              <p onClick={() => setmenu("contact")}>Contact</p>
            </AnchorLink>
            {menu === "contact" ? <img src={underline} alt="" /> : <></>}
          </li>
        </ul>
        <div className={styles.navconnect}> <AnchorLink className={styles.anchorlink} offset={50} href="#contact">Connect With Me</AnchorLink></div>
      </div>
    </>
  );
};
export default Navbar;
