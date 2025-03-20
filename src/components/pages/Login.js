import classes from '../../styles/Login.module.css'
import Illustration from '../LogIllustration' 
import Button from '../Button'
import Form from '../Form' 
import TextInput from '../TextInput'
export default function Login(){
    return (
        <>
        <h1>Login to your account</h1>
        <div class="column">
            <Illustration/>
             <Form className={`${classes.login}`}
             >
                 <TextInput type="text" placeholder="Enter your Email" icon="alternate_email"/>

                 <TextInput type="password" placeholder="Enter your password" icon="lock"/>
                 <Button>Login</Button>
             </Form>

        </div>
        </>
    )
}