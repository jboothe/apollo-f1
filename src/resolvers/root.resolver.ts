const driver = (_, params, context) => context.driver.getDriver(params.driverId)
const allDrivers = (_, params, context) => context.driver.getDrivers(params.year, params.round, params.offset, params.limit)

export default {
  RootQuery: {
    driver,
    allDrivers,
  },
}
