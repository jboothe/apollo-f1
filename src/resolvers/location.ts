const lat = (location) => location.lat
const long = (location) => location.long
const locality = (location) => location.locality
const country = (location) => location.country

export default {
  Location: {
    lat,
    long,
    locality,
    country,
  },
}
