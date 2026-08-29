import { Component, HostListener, signal, OnInit, OnDestroy, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar implements OnInit, OnDestroy {
  private document = inject(DOCUMENT);

  isScrolled = signal(false);
  isMenuOpen = signal(false);
  isDark = signal(false);
  scrollProgress = signal(0);
  activeSection = signal('inicio');

  private sections = ['inicio', 'sobre-mi', 'proyectos', 'experiencia', 'contacto'];

  ngOnInit() {
    if (typeof localStorage === 'undefined' || typeof window === 'undefined') {
      return;
    }
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = saved ? saved === 'dark' : prefersDark;
    this.isDark.set(initialDark);
    this.applyTheme(initialDark);
    this.onScroll();
  }

  ngOnDestroy() {}

  @HostListener('window:scroll', [])
  onScroll() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    this.scrollProgress.set(Math.min(100, Math.max(0, progress)));
    this.isScrolled.set(scrollTop > 30);
    this.updateActiveSection(scrollTop);
  }

  private updateActiveSection(scrollTop: number) {
    const scrollPos = scrollTop + window.innerHeight * 0.35;
    for (let i = this.sections.length - 1; i >= 0; i--) {
      const id = this.sections[i];
      const el = this.document.getElementById(id);
      if (el && el.offsetTop <= scrollPos) {
        this.activeSection.set(id);
        return;
      }
    }
    this.activeSection.set('inicio');
  }

  toggleDark() {
    this.isDark.update((v) => !v);
    this.applyTheme(this.isDark());
  }

  private applyTheme(dark: boolean) {
    const html = this.document.documentElement;
    if (dark) {
      html.setAttribute('data-theme', 'dark');
    } else {
      html.removeAttribute('data-theme');
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    }
  }

  toggleMenu() {
    this.isMenuOpen.update((v) => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}

