import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss'],
})
export class TemperatureComponent implements OnInit {
  @Input() temp: number;
  @Input() windChill: number;

  constructor() { }

  ngOnInit(): void {

  }
}