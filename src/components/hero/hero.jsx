import styles from "./hero.module.css";
import profile from "../../assets/profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <>
      <div id="home" className={styles.hero}>
        <img src={profile} alt="" />
        <h1>
          <span>I'm Vaidehi Parmar,</span>  beginner React.js developer. 
        </h1>
        <p>i am passionate about creating interactive and efficient web applications. Explore my projects to see my progress and feel free to reach out for collaboration or feedback..</p>
        <div className={styles.heroaction}>
          <div className={styles.heroconnect}><AnchorLink className={styles.anchorlink} offset={50} href="#contact">Connect With Me</AnchorLink></div>
          <div className={styles.heroresume}>My resume</div>
        </div>
      </div>
    </>
  );
};

export default Hero;
