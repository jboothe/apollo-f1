const number = (driverResult) => driverResult.number
const position = (driverResult) => driverResult.position
const points = (driverResult) => driverResult.points
const grid = (driverResult) => driverResult.grid
const laps = (driverResult) => driverResult.laps
const status = (driverResult) => driverResult.status
const driver = (driverResult) => driverResult.Driver
const konstruktor = (driverResult) => driverResult.Constructor

// const driver = (driverResult, _, context) => context.driver.getDriver(driverResult.driver)

export default {
  DriverResult: {
    number,
    position,
    points,
    grid,
    laps,
    status,
    driver,
    konstruktor,
  },
}
