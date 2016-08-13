import BaseModel from './base'

export default class Driver extends BaseModel {

  public getDrivers(year?:number, round?:number, offset?: number, limit?: number) {
    console.log('getDrivers called');
    return new Promise<any>((resolve, reject) => {
      this.connector.fetch('/drivers.json', year, round, offset, limit).then((data) => {
        const rows = data.MRData.DriverTable.Drivers;
        console.log(`Got ${rows.length} rows`, JSON.stringify(rows, null, 2));
        resolve(rows);
      })
    }) 
  }

  public getDriver(driverId: string) {
    return new Promise<any>((resolve, reject) => {
      this.connector.fetch(`/drivers/${driverId}.json`).then((data) => {
        const item = data.MRData.DriverTable.Drivers[0];
        resolve(item);
      })
    })
  }

}
