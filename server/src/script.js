 // Imported PrismaClient constructor
 const { PrismaClient } = require("@prisma/client")

 // Instantiated 
 const prisma = new PrismaClient()

 //Main func to send queries to db
 async function main() {


     const newMessage = await prisma.message.create({
         data: {
             content: 'A message from a user'
         }
     })

     const allMessages = await prisma.message.findMany()
     console.log(allMessages)
 }
 

//Call mail, close db when script terminates
main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.disconnect()
    })