import BaseModel from './base'

export default class DriverResult extends BaseModel {

  public getDriverResults(year?:number, round?:number, offset?: number, limit?: number) {
    console.log('getDriverResults called');
    return new Promise<any>((resolve, reject) => {
      this.connector.fetch('/results.json', year, round, offset, limit).then((data) => {
        const rows = data.MRData.RaceTable.Races[0].Results;
        console.log(`Got ${rows.length} driverResult rows`, JSON.stringify(rows, null, 2));
        resolve(rows);
      })
    }) 
  }

}
