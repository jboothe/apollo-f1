import driver from './driver'
import season from './season'
import circuit from './circuit'
import location from './location'
import race from './race'
import raceResult from './race-result'
import driverResult from './driver-result'
import konstruktor from './constructor'
import root from './root'

const schema = `
  schema {
    query: RootQuery
  }
`

export default [
  driver,
  season,
  circuit,
  location,
  race,
  raceResult,
  driverResult,
  konstruktor,
  root,
  schema
]
