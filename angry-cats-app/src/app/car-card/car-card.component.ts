import { NgFor, NgForOf } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [NgForOf, NgFor],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.scss'
})

export class CarCardComponent {

    @Input() brand! : string;

    @Input() model! : string;

    @Input() imgSrc! : string;
}
