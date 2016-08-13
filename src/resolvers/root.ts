const allDrivers = (_, params, context) => context.driver.getDrivers(params.year, params.round, params.offset, params.limit)
const driver = (_, params, context) => context.driver.getDriver(params.driverId)

const allSeasons = (_, params, context) => context.season.getSeasons(params.offset, params.limit)
const season = (_, params, context) => context.season.getSeason(params.seasonId)

const circuit = (_, params, context) => context.circuit.getCircuit(params.circuitId)
const allCircuits = (_, params, context) => context.circuit.getCircuits(params.year, params.round, params.offset, params.limit)

const allRaces = (_, params, context) => context.race.getRaces(params.year, params.round, params.offset, params.limit)
const allRaceResults = (_, params, context) => context.raceResult.getRaceResults(params.year, params.round, params.offset, params.limit)

const allDriverResults = (_, params, context) => context.driverResult.getDriverResults(params.year, params.round, params.offset, params.limit)

const oneKonstruktor = (_, params, context) => context.konstruktor.getKonstruktor(params.constructorId)
const allKonstruktors = (_, params, context) => context.konstruktor.getKonstruktors(params.year, params.round, params.offset, params.limit)


export default {
  RootQuery: {
    allDrivers,
    driver,
    allSeasons,
    season,
    circuit,
    allCircuits,
    allRaces,
    allDriverResults,
    oneKonstruktor,
    allKonstruktors,
    allRaceResults
  },
}
