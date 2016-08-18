const driverId = (driver) => driver.driverId
const firstName = (driver) => driver.givenName
const lastName = (driver) => driver.familyName
const fullName = (driver) => driver.givenName +' '+driver.familyName
const permanentNumber = (driver) => driver.permanentNumber
const code = (driver) => driver.code
const dateOfBirth = (driver) => driver.dateOfBirth
const nationality = (driver) => driver.nationality
const url = (driver) => driver.url

export default {
  Driver: {
    driverId,
    firstName,
    lastName,
    fullName,
    permanentNumber,
    code,
    dateOfBirth,
    nationality,
    url,
  },
}
