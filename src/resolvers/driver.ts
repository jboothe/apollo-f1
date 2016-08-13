const driverId = (driver) => driver.driverId
const givenName = (driver) => driver.givenName
const familyName = (driver) => driver.familyName
const fullName = (driver) => driver.givenName +' '+driver.familyName
const permanentNumber = (driver) => driver.permanentNumber
const code = (driver) => driver.code
const dateOfBirth = (driver) => driver.dateOfBirth
const nationality = (driver) => driver.nationality
const url = (driver) => driver.url
const __description = 'A driver that has entered a race.'

export default {
  Driver: {
    __description,
    driverId,
    givenName,
    familyName,
    fullName,
    permanentNumber,
    code,
    dateOfBirth,
    nationality,
    url,
  },
}
