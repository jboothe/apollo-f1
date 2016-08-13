import rootQuery from './root'
import driver from './driver'
import season from './season'
import circuit from './circuit'
import location from './location'
import race from './race'
import driverResult from './driver-result'
import konstruktor from './constructor'
import raceResult from './race-result'

export default Object.assign(rootQuery, driver, season, circuit, location, race, driverResult, konstruktor, raceResult)
