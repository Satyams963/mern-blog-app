import { useState } from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import axios from '../../axios'

function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setErroe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErroe(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password
      });
      res.data && window.location.replace('/login');
    } catch (error) {
      setErroe(true);
    }
  }

  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
      <form action="" onSubmit={handleSubmit} className="registerForm">
        <label>Username</label>
        <input className='registerInput' type="text" placeholder='Enter your username...' onChange={e => setUsername(e.target.value)}/>

        <label>Email</label>
        <input className='registerInput' type="text" placeholder='Enter your email...'onChange={e => setEmail(e.target.value)} />

        <label>Password</label>
        <input className='registerInput' type="password" placeholder='Enter your password...' onChange={e => setPassword(e.target.value)}/>

        <button className="registerButton" tupe="submit"> Register</button>
      </form>

      <button className="registerLoginButton"><Link to="/login" style={{textDecoration: "none", color:"inherit"}}>Login</Link></button>

      {error && <span>Something went wrong!</span>}
    </div>
  )
}

export default Register
