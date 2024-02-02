import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CarCardComponent } from './car-card/car-card.component';
import { CarService } from './car-card/car.service';

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [AppComponent, CarCardComponent],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
