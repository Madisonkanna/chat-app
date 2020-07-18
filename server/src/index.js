const { GraphQLServer } = require('graphql-yoga')
const { PrismaClient } = require('@prisma/client')


//Implementation of GraphQL Schema via resolvers, populating data into schema
//Prisma client allows exposure of db queries that let us read/write to db. PC exposes a CRUD API for the models in datamodel for us to read/write to db.
const resolvers = {
  Query: {
    info: () => `API for chat app`,
    feed: async (parent, args, context) => {
        return context.prisma.message.findMany()
    },
  },

//Mutation allowing users to post new messages
  Mutation: {
      message: (parents, args, context, info) => {
          const newMessage = context.prisma.message.create({
              data: {

                content: args.content

              }
          })
          return newMessage
      }
  }
}

//Instance of prisma client
const prisma = new PrismaClient()

//Create server
const server = new GraphQLServer({
   typeDefs: './src/schema.graphql',
  resolvers,
  context: {
      prisma
  }
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
