import React from 'react';
import Login from './components/Login'
import MessageList from './components/MessageList'

//What does my apollo provider do? docs:
//Apollo abstracts away all lower-level networking logic and provides a nice interface to the GraphQL server.

function App() {
    return (
        <div>
            <Login />
            <MessageList />
        </div>

    )
}

export default App;
