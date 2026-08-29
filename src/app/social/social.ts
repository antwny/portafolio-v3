import { Component, signal } from '@angular/core';
import { MOCK_SOCIAL, USER } from '../mock-data';
import { RevealDirective } from '../reveal.directive';

@Component({
  imports: [RevealDirective],
  selector: 'app-social',
  styleUrl: './social.css',
  templateUrl: './social.html',
})
export class Social {
  socials = MOCK_SOCIAL;
  user = USER;
  currentYear = new Date().getFullYear();
  copiedEmail = signal(false);

  private timeoutId?: ReturnType<typeof setTimeout>;

  copyEmail(event?: Event) {
    if (event) event.preventDefault();
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(this.user.email);
      this.copiedEmail.set(true);
      if (this.timeoutId) clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        this.copiedEmail.set(false);
      }, 2400);
    }
  }
}

