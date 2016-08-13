const circuitId = (circuit) => circuit.circuitId
const url = (circuit) => circuit.url
const circuitName = (circuit) => circuit.circuitName
const location = (circuit) => circuit.Location

export default {
  Circuit: {
    circuitId,
    url,
    circuitName,
    location,
  },
}
