import styles from "./about.module.css";
import profile from "../../assets/profile1.jpg";
const About = () => {
  return (
    <>
      <div id="about" className={styles.about}>
        <div className={styles.title}>
          <h1>About Me</h1>
        </div>
        <div className={styles.aboutsections}>
          <div className={styles.aboutleft}>
            <img src={profile} alt="" />
          </div>
          <div className={styles.aboutright}>
            <div className={styles.aboutpara}>
              <p>
                Welcome i'm Vaidehi parmar As a beginner React.js developer, I'm
                excited to showcase my journey into the world of web
                development.
              </p>
              <p>
                With a passion for crafting interactive and efficient user
                interfaces, I'm dedicated to learning and growing my skills.
              </p>
              <p>
                Explore my projects to see my progress and feel free to reach
                out for collaboration or feedback.
              </p>
            </div>
            <div className={styles.aboutskills}>
              <div className={styles.skill}>
                <p>HTML & CSS</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className={styles.skill}>
                <p>JavaScript</p>
                <hr style={{ width: "70%" }} />
              </div>
              <div className={styles.skill}>
                <p>React Js</p>
                <hr style={{ width: "60%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
