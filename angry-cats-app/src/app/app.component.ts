import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Car } from './car-card/car';
import { CarCardComponent } from './car-card/car-card.component';
import { CarService } from './car-card/car.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

    public cars: Car[] | undefined;

  constructor(private carService: CarService) {}

  public ngOnInit(): void {
    this.carService
      .fetchCars()
      .subscribe((response: Car[]) => (this.cars = response));
  }
}
