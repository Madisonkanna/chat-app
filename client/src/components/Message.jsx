import React, { useState } from 'react'

const Message = (props) => {

    console.log(props,'props')

    const [message, setMessage] = useState('')

    return (
        <div>
            message
            {props.message.content} 
        </div>
    )
}

export default Message