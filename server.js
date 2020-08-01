const { GraphQLServer } = require('graphql-yoga')
const typeDefs = require('./typedefs')
const resolvers = require('./resolvers')
const morgan = require('morgan')
const cors = require('cors')
 

 

//Create Server
const server = new GraphQLServer({ typeDefs, resolvers })

//Load Middleware
server.express.use(morgan('common'))
server.express.use(cors())

//Start Listening
server.start(() => console.log('Server is running on localhost:4000'))