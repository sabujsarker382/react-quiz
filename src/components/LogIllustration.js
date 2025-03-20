import classes from '../styles/Illustration.module.css'
import img from '../assets/images/signup.svg'
export default function Illustration(){
    return(
        <div className={classes.illustration}>
        <img src={img} alt="login" />
      </div>
    )
}