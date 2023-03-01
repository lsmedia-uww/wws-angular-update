import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heat-index',
  templateUrl: './heat-index.component.html',
  styleUrls: ['./heat-index.component.scss']
})
export class HeatIndexComponent implements OnInit {
  @Input() heatIndex: number;
  @Input() windChill: number;
  //temp for if statement
  @Input() temp: number;

  constructor() { }

  ngOnInit(): void {
  }

}
