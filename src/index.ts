const gqlTools = require('graphql-tools')

import typeDefs from './schema/index'
import resolvers from './resolvers/index'
import F1Connector from './connectors/f1'
import DriverModel from './models/driver'
import SeasonModel from './models/season'
import CircuitModel from './models/circuit'
import RaceModel from './models/race'
import DriverResultModel from './models/driver-result'
import RaceResultModel from './models/race-result'
import KonstruktorModel from './models/constructor'
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
            season: new SeasonModel(f1Connector),
            circuit: new CircuitModel(f1Connector),
            race: new RaceModel(f1Connector),
            raceResult: new RaceResultModel(f1Connector), 
            driverResult: new DriverResultModel(f1Connector),
            konstruktor: new KonstruktorModel(f1Connector)  
        },
        formatError: function(err) {
            if(err.originalError){
                console.log(err.originalError);
            } else {
                console.log(err);
            }
            return err;
        }
    }
}

startExpress(graphqlOptions)
