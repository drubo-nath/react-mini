import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

export default function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        
        setUser({userName, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
            placeholder='username' value={userName} onChange={(e) => setUserName(e.target.value)} 
        />
        
        <br />
        <input type="text" 
            placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} 
        /> <br />
        <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  )
}
