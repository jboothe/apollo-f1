import * as request from 'request'
const DataLoader = require('dataloader')
const RACE_SERIES = 'f1'

export default class F1Connector {
  public loader
  private rootURL: string

  constructor(rootURL: string) {
    this.rootURL = rootURL + RACE_SERIES
    this.loader = new DataLoader((urls) => {
      const promises = urls.map((url) => {
        return this.fetch(url)
      })
      return Promise.all(promises)
    }, {batch: false})
  }

  /**
   * public fetch
   * desc: the method that calls the remote REST API
   */
  public fetch(resource: string, year?:number, round?:number, offset?: number, limit?: number) {
    const params:string = this.makeParams(offset, limit)
    const _year:string = (year) ? `/${year}` : ''
    const _round:string = (year && round) ? `/${round}` : ''  
    const url = this.rootURL + _year + _round + resource + params
    return new Promise<any>((resolve, reject) => {
      console.log(`fetch: ${url}`)
      request.get(url, (err, resp, body) => {
        console.log(`fetch: ${url} completed`)
        err ? reject(err) : resolve(JSON.parse(body))
        })
      })
  }


  /**
   * private makeParams
   * desc: if offset or limit params are provided, then the query string is created
   */
  private makeParams(offset?: number, limit?: number): string {
    const _offset:string = (offset) ? `offset=${offset}&` : '';
    const _limit:string = (limit) ? `limit=${limit}` : '';
    const params: string = (offset || limit) ? '?' + _offset + _limit : '';
    return params;
  }

}
