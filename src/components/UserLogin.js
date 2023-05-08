import { useNavigate } from "react-router-dom"

export default function(){
    let navigate = useNavigate();

    return (<div id='user-login-main'>
        <div id='login-form'>
            
            <input type='email' placeholder="Enter Email"/>
            <input type="password" placeholder="Enter Password" />
            
            <button onClick={()=>{
                navigate('/events')
            }}>Login</button>
        </div>

        <div>
            <h2>Not a member? <button>Register!</button></h2>
        </div>



    </div>)
}