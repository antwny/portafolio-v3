import { Component } from '@angular/core';
import { MOCK_EXPERIENCE, MOCK_CERTIFICATIONS } from '../mock-data';
import { RevealDirective } from '../reveal.directive';

@Component({
  imports: [RevealDirective],
  selector: 'app-experience',
  styleUrl: './experience.css',
  templateUrl: './experience.html',
})
export class Experience {
  experiences = MOCK_EXPERIENCE;
  certifications = MOCK_CERTIFICATIONS;
}
