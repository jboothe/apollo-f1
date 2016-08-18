const gqlTools = require('graphql-tools')

import typeDefs from './schema/index'
import resolvers from './resolvers/index'
import F1Connector from './connectors/f1'
import DriverModel from './models/driver.model'
import { startExpress } from './express'

const apiHost = 'http://ergast.com/api/'
const schema = gqlTools.makeExecutableSchema({ typeDefs, resolvers });

function graphqlOptions() {
    const f1Connector = new F1Connector(apiHost)

    return {
        pretty: true,
        schema: schema,
        context: {
            driver: new DriverModel(f1Connector),
        }
    }
}

startExpress(graphqlOptions)
