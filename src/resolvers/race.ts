const season = (race) => race.season
const round = (race) => race.round
const url = (race) => race.url
const raceName = (race) => race.raceName
const date = (race) => race.date
const time = (race) => race.time
const circuit = (race) => race.Circuit
// const circuit = (race, _, context) => context.circuit.getCircuit(race.circuit)

export default {
  Race: {
    season,
    round,
    url,
    raceName,
    date,
    time,
    circuit
  },
}
