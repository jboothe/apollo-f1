import * as request from 'request'
const RACE_SERIES = 'f1'

export default class F1Connector {
  private rootURL: string

  constructor(rootURL: string) {
    this.rootURL = rootURL + RACE_SERIES
  }

  /**
   * public fetch
   * desc: the method that calls the remote REST API
   */
  public fetch(resource: string, year?:number, round?:number, offset?: number, limit?: number) {
    const url = this.makeUrl(resource, year, round, offset, limit)
    return new Promise<any>((resolve, reject) => {
      request.get(url, (err, resp, body) => {
        err ? reject(err) : resolve(JSON.parse(body))
        })
      })
  }

  /**
   * private makeUrl()
   * desc: takes arguments and forms a URL to the remote REST API
   */
  private makeUrl(resource: string, year?:number, round?:number, offset?: number, limit?: number): string {
    const _year:string = (year) ? `/${year}` : ''
    const _round:string = (year && round) ? `/${round}` : ''  
    const pagingParams:string = this.pagingParams(offset, limit)
    return this.rootURL + _year + _round + resource + pagingParams
  }

  /**
   * private pagingParams
   * desc: if offset or limit params are provided, then the query string is created
   */
  private pagingParams(offset?: number, limit?: number): string {
    const _offset:string = (offset) ? `offset=${offset}&` : '';
    const _limit:string = (limit) ? `limit=${limit}` : '';
    return (offset || limit) ? '?' + _offset + _limit : '';
  }

}
