import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dew-point',
  templateUrl: './dew-point.component.html',
  styleUrls: ['./dew-point.component.scss']
})
export class DewPointComponent implements OnInit {
  @Input() dewPoint: number;

  constructor() { }

  ngOnInit(): void {
  }

}
