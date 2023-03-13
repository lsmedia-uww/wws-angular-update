import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TempVariableService {
  tempGlobalVariable;
  hiGlobalVariable;
  dpGlobalVariable;
  humGlobalVariable;
  wsGlobalVariable;
  rfGlobalVariable;
  wcGlobalVariable;
  rainGlobalVariable;
  solarRadGlobalVariable;

  constructor() {
   }

   setTempVariable(val: number) {
    this.tempGlobalVariable = val;
   }

   getTempVariable() {
    return this.tempGlobalVariable;
   }

   setHiVariable(val: number) {
    this.hiGlobalVariable = val;
   }

   getHiVariable() {
    return this.hiGlobalVariable;
   }

   setDpVariable(val: number) {
    this.dpGlobalVariable = val;
   }

   getDpVariable() {
    return this.dpGlobalVariable;
   }

   setHumVariable(val: number) {
    this.humGlobalVariable = val;
   }

   getHumVariable() {
    return this.humGlobalVariable;
   }

   setWsVariable(val: number) {
    this.wsGlobalVariable = val;
   }

   getWsVariable() {
    return this.wsGlobalVariable;
   }

   setRfVariable(val: number) {
    this.rfGlobalVariable = val;
   }

   getRfVariable() {
    return this.rfGlobalVariable;
   }

   setWindChillVariable(val: number) {
    this.wcGlobalVariable = val;
   }

   getWindChillVariable() {
    return this.wcGlobalVariable;
   }

   setRainVariable(val: number) {
    this.rainGlobalVariable = val;
   }

   getRainVariable() {
    return this.rainGlobalVariable;
   }

   setSolarRadVariable(val: number) {
    this.solarRadGlobalVariable = val;
   }

   getSolarRadVariable() {
    return this.solarRadGlobalVariable;
   }
}
