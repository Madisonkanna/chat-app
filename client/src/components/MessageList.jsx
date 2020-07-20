import React, { Component } from 'react'
import Message from './Message'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'




const MessageList = () => {


    return (
        <Query query={FEED_QUERY}>
            {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>
        
            const messages = data.feed
            console.log(messages, 'messages')
        
            return (
                <div>
                     {messages.map(message => <Message key={message.id} message={message} />)}
                </div>
            )
            }}
        </Query>
    )
}

const FEED_QUERY = gql`
  {
    feed {
        id
        content
    }
  }
`

export default MessageList


