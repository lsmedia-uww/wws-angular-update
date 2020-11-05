export class ChartData {
  public name: string;
  public value?: number;
  public series?: ChartData[]

  constructor(name: string, value?: number, series?: ChartData[]) {
    this.name = name;
    this.value = value;
    this.series = series;
  }
}

export class LineBar {
  public name: string;
  public series: LineBarData[];

  constructor(name: string, series: LineBarData[]) {
    this.name = name;
    this.series = series;
  }
}

export class LineBarData {
  public value: number;
  public name: string;

  constructor(value: number, name: string) {
    this.name = name;
    this.value = value;
  }
}

