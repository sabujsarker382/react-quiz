import Form from '../Form' 
import Illustration from '../Illustration' 
import classes from '../../styles/Signup.module.css'
import TextInput from '../TextInput'
import CheckBox from '../CheckBox'
import Button from '../Button'
import Login from './Login'
export default function Signup(){
    return(
        <>
        <h1>Create an account</h1>
        <div class="column">
            <Illustration/>
            <Form className={`${classes.signup}`}>
                <TextInput type="text" placeholder="Enter your name" icon="person"/>
                <TextInput type="text" placeholder="Enter your Email" icon="alternate_email"/>
                <TextInput type="password" placeholder="Enter your password" icon="lock"/>
                <TextInput type="password" placeholder="Enter your Confirm password" icon="lock_clock"/>
                <CheckBox text="i agree to the Terms &amp; Conditions"/>
                <Button>SubmitNow</Button>
                <div className="info">Already have an account? <a href={Login}>Login</a> instead.</div>
            </Form>
             
        </div>
        </>
    )
}