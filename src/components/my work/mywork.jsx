import styles from "./mywork.module.css"
import project1 from "../../assets/amazon-clone.png"
import project2 from "../../assets/todoapp.png"
import project3 from "../../assets/tic-tac-toe.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Mywork=()=>{
const mywork_data=[
    {
        W_noL:1,
        W_name:"Web design",
        W_img:project1
    },
    {
        W_noL:2,
        W_name:"Web design",
        W_img:project2
    },
    {
        W_noL:3,
        W_name:"Web design",
        W_img:project3
    }
]
    return(
        <>
        <div id="work" className={styles.mywork}>
            <div className={styles.title}>
                <h1>My Latest Work</h1>
            </div>
            <div className={styles.container}>
            {mywork_data.map((work,index)=>{
                return <img key={index} src={work.W_img} alt="" />
            })}
            </div>
            <div className={styles.showmore}>
                <p>Show More</p>
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
        </div>
        </>
    )
}
export default Mywork