import Styles from "./services.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Services=()=>{

    const Services_data=[
       {
        s_no:"01",
        s_name:"Web design",
        s_desc:"Web development is the process of building,programming....."
       } ,
       {
        s_no:"02",
        s_name:"App design",
        s_desc:"Web development is the process of building,programming....."
       },
       {
        s_no:"03",
        s_name:"Graphics design",
        s_desc:"Web development is the process of building,programming....."
       },
    ]
    return(
        <>
        <div id="services" className={Styles.services}>
        <div className={Styles.title}>
            <h1>My Services</h1>
        </div>
        <div className={Styles.container}>
        {Services_data.map((service,index)=>{
            return <div key={index} className={Styles.servicesformat}>
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className={Styles.readmore}>
                    <p>Read More</p>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
        })}
        </div>
        </div>
        </>
    )
}
export default Services