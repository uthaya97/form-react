import React, { useState } from 'react'
import '../Css/Login.css'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [logName, setLogName] = useState("")
    const [logPassword, setLogPassword] = useState("")
const navigate=useNavigate()

    const handleLogin = (va) => {
        va.preventDefault()
        let get =localStorage.getItem("signDetail")
        let logData = JSON.parse(get);
        console.log(logData);
        let value, val
        logData.forEach(function (e) {
            if (logName === e.name) {
                value = true;
                if (logPassword === e.password) {
                    val = true;
                }
                else {
                    val = false
                }
            }
            else {
                value = false;
            }
        })
        if (value == true && val == true) {
            alert("login successful");
            navigate("/customer")
        }
        else if (value == false) {
            alert("wrong username");
        }
        else if (val == false) {
            alert("wrong password");
        }

    }
    const handleLog=()=>{
        navigate("/")
    }
    return (
        <div className="containerr">
            <form>
                <div className='card'>
                    <h2>Log in Page</h2>
                    <div className="inputs">
                        <input type="text" value={logName} placeholder="Enter your name"
                            onChange={(e) => setLogName(e.target.value)}></input><br></br>
                        <input type="Password" value={logPassword} placeholder="Password"
                            onChange={(e) => setLogPassword(e.target.value)}></input>
                    </div>
                    <div className="btn">
                        <a href="#"><button onClick={handleLogin}>Log in</button></a>
                    </div>
                    <div className="para">
                        <a href="#" onClick={handleLog}>Sign Up Page</a>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login