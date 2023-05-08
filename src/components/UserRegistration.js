import { useNavigate } from "react-router-dom"

export default function(){


    return (<div id='user-registration-main'>
        <div id='registration-form'>
            <input type='text' placeholder="Enter Name"/>
            <input type='email' placeholder="Enter Email"/>
            <input type="password" placeholder="Enter Password" />
            <input type="password" placeholder="Confirm Password" />
            <button>Register</button>
        </div>
        <div>
            <h2>Already a member? <button>Login!</button></h2>
        </div>



    </div>)
}