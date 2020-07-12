import React, { useState } from 'react'

const Login = () => {

    const [username, setUsername] = useState('')

    return (
        <form>
            <label htmlFor="username">Username</label>
            <input
                value={username}
                type="text"
                onChange={e => setUsername(e.target.value)}
              />
        </form>
    )
}

export default Login