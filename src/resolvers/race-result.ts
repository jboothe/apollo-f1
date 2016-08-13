const season = (raceResult) => raceResult.season
const round = (raceResult) => raceResult.round
const url = (raceResult) => raceResult.url
const raceName = (raceResult) => raceResult.raceName
const date = (raceResult) => raceResult.date
const time = (raceResult) => raceResult.time
const circuit = (raceResult) => raceResult.Circuit
const driverResults = (raceResult) => raceResult.Results

export default {
  RaceResult: {
    season,
    round,
    url,
    raceName,
    date,
    time,
    circuit,
    driverResults
  },
}
