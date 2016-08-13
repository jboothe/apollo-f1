import BaseModel from './base'

export default class Race extends BaseModel {

  public getRaces(year?:number, round?:number, offset?: number, limit?: number) {
    console.log('getRaces called');
    return new Promise<any>((resolve, reject) => {
      this.connector.fetch('/races.json', year, round, offset, limit).then((data) => {
        const rows = data.MRData.RaceTable.Races;
        console.log(`Got ${rows.length} race rows`, JSON.stringify(rows, null, 2));
        resolve(rows);
      })
    }) 
  }

}
