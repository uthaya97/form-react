import React, { useState } from 'react'
import '../Css/Sign.css'
import { useNavigate } from 'react-router-dom'
const Sign = () => {
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSignup = (val) => {
        val.preventDefault()
        var pwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~`!@#$%^&*()])/;
        if (name === "") {
            alert("please enter your name")
        }
        else if (password === "") {
            alert("please enter password")
        }
        else if (mail === "") {
            alert("please enter your mail")
        }
        else if (pwd.test(password) === false) {
            alert("Password Should contain atleast One Number, One UpperCase and a lowercase letter and one special character");
        }
        else {
            navigate("/login")
            // console.log(name, mail, password);
            let signDetail = {
                name: name,
                password: password
            }
            console.log(signDetail);
            let formData = JSON.parse(localStorage.getItem("signDetail")) || [];
            formData.push(signDetail)
            let string=JSON.stringify(formData)
            localStorage.setItem("signDetail",string )
        }
    }
    const handlebtnss=()=>{
         navigate("/login")
    }
    return (
        <form>
            <div className='container'>
                <h1></h1>
                <div className='row'>
                    <p className="headpara">Create a new account</p>
                    <p className="headnext">It's quick and easy</p>
                    <form >
                        <div className="icon">
                            <input type="text" value={name} placeholder="Enter your name"
                                onChange={(e) => setName(e.target.value)}></input>

                        </div>
                        <div className="icon">
                            <input type="email" value={mail} placeholder="Email address"
                                onChange={(e) => setMail(e.target.value)}></input>
                        </div>
                        <div className="icon">
                            <input value={password} type="password" placeholder="password"
                                onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        <p>Date of birth   <i className="fa fa-question-circle" aria-hidden="true"></i></p>
                        <div className="icon1">
                            <div className="dob" id="date">
                                <select>
                                    {Array.from({ length: 31 }, (_, i) => i + 1).map((num) => (
                                        <option value={num}>{num}</option>
                                    ))}
                                </select>

                            </div>
                            <div className="dob" id="month">
                                <select>
                                    <option value="jan">Jan</option>
                                    <option value="Feb">Feb</option>
                                    <option value="mar">Mar</option>
                                    <option value="apr">Apr</option>
                                    <option value="may">May</option>
                                    <option value="jun">Jun</option>
                                    <option value="july">July</option>
                                    <option value="aug">Aug</option>
                                    <option value="sep">Sep</option>
                                    <option value="oct">Oct</option>
                                    <option value="nov">Nov</option>
                                    <option value="dec">Dec</option>
                                </select>
                            </div>
                            <div className="dob" id="year">
                                <select>
                                    {Array.from({ length: 35 }, (_, i) => i + 1990).map((num) => (
                                        <option value={num}>{num}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <p>Gender    <i className="fa fa-question-circle" aria-hidden="true"></i></p>
                        <div className="icon1">
                            <div className="gen">
                                Female <input type="radio" name="gender"></input>
                            </div>
                            <div className="gen">
                                Male <input type="radio" name="gender"></input>
                            </div>
                            <div className="gen">
                                Custom <input type="radio" name="gender"></input>
                            </div>
                        </div>
                        <p>People who use our service may have uploaded your contact information to Signup page.<a href="#">Learn more</a></p>
                        <div className="icon2">
                            <input type="submit" value="Sign Up" className="log" onClick={handleSignup}></input>
                        </div>
                        <div className="para">
                            <a href="#" onClick={handlebtnss}>Log In Page</a>
                        </div>
                    </form>
                </div>
            </div>
        </form>
    )
}

export default Sign