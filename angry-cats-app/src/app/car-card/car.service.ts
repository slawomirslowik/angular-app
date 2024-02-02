import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) { }

  public fetchCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>('http://localhost:3000/cars');
  }
}
