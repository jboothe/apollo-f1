import BaseModel from './base'

export default class Circuit extends BaseModel {

  public getCircuits(year?:number, round?:number, offset?: number, limit?: number) {
    console.log('getCircuits called');
    return new Promise<any>((resolve, reject) => {
      this.connector.fetch('/circuits.json', year, round, offset, limit).then((data) => {
        const rows = data.MRData.CircuitTable.Circuits;
        console.log(`Got ${rows.length} circuit rows`, JSON.stringify(rows, null, 2));
        resolve(rows);
      })
    }) 
  }


  public getCircuit(circuitId: string) {
    console.log('getCircuit called');
    return new Promise<any>((resolve, reject) => {
      this.connector.fetch(`/circuits/${circuitId}.json`).then((data) => {
        const item = data.MRData.CircuitTable.Circuits[0];
        resolve(item);
      })
    })
  }

}
