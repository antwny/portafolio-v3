import { Component } from '@angular/core';
import { USER } from '../mock-data';
import { RevealDirective } from '../reveal.directive';

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  user = USER;
}
