import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as apollo from 'apollo-server'

const APP_PORT = process.env.PORT || 3030
const app = express()

export function startExpress(graphqlOptions) {
  app.use(bodyParser.json())
  app.use('/graphql', apollo.apolloExpress(graphqlOptions))
  app.use('/', apollo.graphiqlExpress({endpointURL: '/graphql'}))

  app.listen(APP_PORT, () => {
    console.log(`Express server is listening now on ${APP_PORT}`)
  })
}