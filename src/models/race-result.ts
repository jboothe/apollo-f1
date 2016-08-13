import BaseModel from './base'

export default class RaceResult extends BaseModel {

  public getRaceResults(year?:number, round?:number, offset?: number, limit?: number) {
    console.log('getRaceResults called');
    return new Promise<any>((resolve, reject) => {
      this.connector.fetch('/results.json', year, round, offset, limit).then((data) => {
        const rows = data.MRData.RaceTable.Races;
        console.log(`Got ${rows.length} driverResult rows`, JSON.stringify(rows, null, 2));
        resolve(rows);
      })
    }) 
  }

}
