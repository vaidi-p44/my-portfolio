import styles from "./contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot} from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3e68e95c-1146-4a23-a4d1-d9585830fac4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
};
  return (
    <>
      <div id="contact" className={styles.contact}>
        <div className={styles.title}>
          <h1>Get in touch </h1>
        </div>
        <div className={styles.section}>
          <div className={styles.contactleft}>
            <h1>Let's talk</h1>
            <p>
              I'm currently avaliable to take on new project, so feel to send me
              a message about anything that you want me to work on. you can
              contact anytime.
            </p>
            <div className={styles.contactdetails}>
              <div className={styles.detail}>
                <FontAwesomeIcon icon={faEnvelope} className={styles.email}/>
                <p>parmarvaidehi30@gmail.com</p>
              </div>
              <div className={styles.detail}>
                <FontAwesomeIcon icon={faPhone} className={styles.phone}/>
                 <p>+91 93136-23920</p>
              </div>
              <div className={styles.detail}>
                <FontAwesomeIcon icon={faLocationDot} className={styles.location}/>
                <p>kukma, bhuj-kutch(Gujrat)</p>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} className={styles.contactright}>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name"/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter your Email" name="email"/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
            <button type="submit" className={styles.submit}>Submit now</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
