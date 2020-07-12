const { GraphQLServer } = require('graphql-yoga')

//Dummy data for now
let messages = [{
  id: 'message-0',
  content: 'This is a message.'
}]

let idCount = messages.length 

//Implementation of GraphQL Schema via resolvers
const resolvers = {
  Query: {
    info: () => `API for chat app`,
    feed: () => messages
  },


//Mutation allowing users to post new messages
  Mutation: {
      message: (parents, args) => {
          const message = {
              id: `post-${idCount++}`,
              content: args.content
          }
          messages.push(message)
          return message
      }

  }
}

//Create server
const server = new GraphQLServer({
   typeDefs: './src/schema.graphql',
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
