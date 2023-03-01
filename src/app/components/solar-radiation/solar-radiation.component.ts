import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-solar-radiation',
  templateUrl: './solar-radiation.component.html',
  styleUrls: ['./solar-radiation.component.scss']
})
export class SolarRadiationComponent {
  @Input() solarRad: number;

  constructor() { }

  ngOnInit(): void {

  }
}
