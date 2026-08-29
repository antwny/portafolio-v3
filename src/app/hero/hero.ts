import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { USER } from '../mock-data';
import { RevealDirective } from '../reveal.directive';

@Component({
  imports: [RevealDirective],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero implements OnInit, OnDestroy {
  user = USER;
  currentTime = signal('');
  copiedEmail = signal(false);

  private timerInterval?: ReturnType<typeof setInterval>;
  private timeoutId?: ReturnType<typeof setTimeout>;

  ngOnInit() {
    this.updateClock();
    if (typeof window !== 'undefined') {
      this.timerInterval = setInterval(() => this.updateClock(), 1000);
    }
  }

  ngOnDestroy() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }

  private updateClock() {
    try {
      const now = new Date();
      const timeStr = new Intl.DateTimeFormat('es-PE', {
        timeZone: 'America/Lima',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(now);
      this.currentTime.set(timeStr);
    } catch {
      const d = new Date();
      this.currentTime.set(
        `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`
      );
    }
  }

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

