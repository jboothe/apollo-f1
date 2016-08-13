export default `

type RootQuery {
  driver(driverId: String!): Driver
  allDrivers(year: Int, round: Int, offset: Int, limit: Int): [Driver]
  
  season(seasonId: ID!): Season
  allSeasons(offset: Int, limit: Int): [Season]
  
  circuit(circuitId: String!): Circuit
  allCircuits(year: Int, round: Int, offset: Int, limit: Int): [Circuit]
  
  allRaces(year: Int, round: Int, offset: Int, limit: Int): [Race]
  allRaceResults(year: Int, round: Int, offset: Int, limit: Int): [RaceResult]
  
  allDriverResults(year: Int, round: Int, offset: Int, limit: Int): [DriverResult]
  
  oneKonstruktor(constructorId: String!): Konstruktor
  allKonstruktors(year: Int, round: Int, offset: Int, limit: Int): [Konstruktor]
  
}

`
