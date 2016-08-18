export default `

type RootQuery {
  driver(driverId: String!): Driver
  allDrivers(year: Int, round: Int, offset: Int, limit: Int): [Driver]  
}

`
