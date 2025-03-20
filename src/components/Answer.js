import Checkbox from './CheckBox'
import classes from '../styles/Answer.module.css'
export default function Answer(){
    return(
        <div className={classes.answers}>
            <Checkbox className={classes.answer}
            text="test answwer"/>
        </div>
        
    )
}