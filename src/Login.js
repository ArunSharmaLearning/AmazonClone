import React ,{useState} from 'react'
import {Link , useHistory} from "react-router-dom"
import "./Login.css"
import {auth} from "./firebase"

function Login() {
    const history=useHistory()
    const [email , setemail] = useState('')
    
    const [pass , setpass] = useState('')
    
    const login = (event) =>
    {
            event.preventDefault()
            auth.signInWithEmailAndPassword( email , pass)
            .then((auth) => {
                        history.push("/")
            })
            .catch((e) => alert(e.message))
    }
    const register = (event) =>
    {
            event.preventDefault()

            auth.createUserWithEmailAndPassword(email, pass)
            .then(auth=>{ history.push("/")})
            .catch((e)=>alert(e.message))
    }

    return (
        <div className="login">
            <Link to="/">
            <img className="login_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"  alt=""/>
            </Link>
            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input onChange={ e => setemail(e.target.value)} value={email} type="email" />
                    <h5>Password</h5>
                    <input onChange={e => setpass(e.target.value)} value={pass} type="password"/>
                    <button onClick={login} className="login_sign">Sign In</button>
                </form>
                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. 
                </p>
                <button onClick={register} className="login_register">Create your Amazon account </button>
            </div>

        </div>
    )
}

export default Login
