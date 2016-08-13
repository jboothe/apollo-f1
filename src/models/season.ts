import BaseModel from './base'

export default class Season extends BaseModel {

  public getSeasons(offset?: number, limit?: number) {
    console.log('getSeasons called');
    return new Promise<any>((resolve, reject) => {
      this.connector.fetch('/seasons.json', offset, limit).then((data) => {
        const rows = data.MRData.SeasonTable.Seasons;
        console.log(`Got ${rows.length} season rows`, JSON.stringify(rows, null, 2));
        resolve(rows);
      })
    })
  }

  public getSeason(seasonId: number) {
    return new Promise<any>((resolve, reject) => {
      this.connector.fetch(`/${seasonId}/seasons.json`).then((data) => {
        const item = data.MRData.SeasonTable.Seasons[0];
        console.log('Got season', JSON.stringify(item, null, 2))
        resolve(item)
      })
    })
  }
  
}
