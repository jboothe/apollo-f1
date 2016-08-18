import driver from './driver.schema'
import root from './root.schema'

const schema = `
  schema {
    query: RootQuery
  }
`

export default [
  driver,
  root,
  schema
]
