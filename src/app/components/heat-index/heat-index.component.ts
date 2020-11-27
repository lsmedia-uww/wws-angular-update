import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heat-index',
  templateUrl: './heat-index.component.html',
  styleUrls: ['./heat-index.component.scss']
})
export class HeatIndexComponent implements OnInit {
  @Input() heatIndex: number;

  constructor() { }

  ngOnInit(): void {
  }

}
