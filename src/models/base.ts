import F1Connector from '../connectors/f1'

export default class BaseModel {
  protected connector: F1Connector

  constructor(connector) {
    this.connector = connector
  }

  public getConnections(urls: Array<string>) {
    return this.connector.loader.loadMany(urls)
  }
  public getConnection(url: string) {
    return this.connector.loader.load(url)
  }
}
