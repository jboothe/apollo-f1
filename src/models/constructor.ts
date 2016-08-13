import BaseModel from './base'

export default class Konstruktor extends BaseModel {

  public getKonstruktors(year?:number, round?:number, offset?: number, limit?: number) {
    console.log('getKonstruktors called');
    return new Promise<any>((resolve, reject) => {
      this.connector.fetch('/constructors.json', year, round, offset, limit).then((data) => {
        const rows = data.MRData.ConstructorTable.Constructors;
        console.log(`Got ${rows.length} konstruktor rows`, JSON.stringify(rows, null, 2));
        resolve(rows);
      })
    }) 
  }

  public getKonstruktor(constructorId: string) {
    console.log('getKonstruktor called');
    return new Promise<any>((resolve, reject) => {
      this.connector.fetch(`/constructors/${constructorId}.json`).then((data) => {
        const item = data.MRData.ConstructorTable.Constructors[0];
        resolve(item);
      })
    })
  }

}
