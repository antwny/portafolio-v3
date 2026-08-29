import { Component, HostListener, signal, computed } from '@angular/core';
import { MOCK_PROJECTS, MOCK_SKILLS, Project, ProjectGalleryItem } from '../mock-data';
import { RevealDirective } from '../reveal.directive';

export type ProjectFilter = 'ALL' | 'FULL-STACK' | 'FRONTEND' | 'ENTERPRISE' | 'BACKEND';

@Component({
  imports: [RevealDirective],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {
  allProjects = MOCK_PROJECTS;
  skills = MOCK_SKILLS;

  activeFilter = signal<ProjectFilter>('ALL');
  activeModalProject = signal<Project | null>(null);
  activeImageIndex = signal<number>(0);
  imageLoading = signal<boolean>(true);

  private touchStartX = 0;
  private touchStartY = 0;

  filters: { label: string; value: ProjectFilter }[] = [
    { label: 'TODOS', value: 'ALL' },
    { label: 'FULL-STACK', value: 'FULL-STACK' },
    { label: 'FRONTEND & SPA', value: 'FRONTEND' },
    { label: 'ENTERPRISE & CLOUD', value: 'ENTERPRISE' },
    { label: 'BACKEND & SISTEMAS', value: 'BACKEND' },
  ];

  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'ALL') {
      return this.allProjects;
    }
    return this.allProjects.filter(
      (p) => p.category === filter || (filter === 'BACKEND' && p.category === 'FULL-STACK')
    );
  });

  setFilter(filter: ProjectFilter) {
    this.activeFilter.set(filter);
  }

  openGallery(project: Project, index: number = 0) {
    this.imageLoading.set(true);
    this.activeModalProject.set(project);
    this.activeImageIndex.set(index);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  closeGallery() {
    this.activeModalProject.set(null);
    this.activeImageIndex.set(0);
    this.imageLoading.set(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  nextImage() {
    const project = this.activeModalProject();
    if (!project || !project.gallery || project.gallery.length <= 1) return;
    this.imageLoading.set(true);
    const nextIdx = (this.activeImageIndex() + 1) % project.gallery.length;
    this.activeImageIndex.set(nextIdx);
  }

  prevImage() {
    const project = this.activeModalProject();
    if (!project || !project.gallery || project.gallery.length <= 1) return;
    this.imageLoading.set(true);
    const prevIdx =
      (this.activeImageIndex() - 1 + project.gallery.length) % project.gallery.length;
    this.activeImageIndex.set(prevIdx);
  }

  selectImage(index: number) {
    if (index === this.activeImageIndex()) return;
    this.imageLoading.set(true);
    this.activeImageIndex.set(index);
  }

  onImageLoaded() {
    this.imageLoading.set(false);
  }

  onImageError(event: Event) {
    this.imageLoading.set(false);
  }

  onTouchStart(event: TouchEvent) {
    if (event.touches.length === 1) {
      this.touchStartX = event.touches[0].clientX;
      this.touchStartY = event.touches[0].clientY;
    }
  }

  onTouchEnd(event: TouchEvent) {
    if (event.changedTouches.length === 1) {
      const touchEndX = event.changedTouches[0].clientX;
      const touchEndY = event.changedTouches[0].clientY;
      const diffX = touchEndX - this.touchStartX;
      const diffY = touchEndY - this.touchStartY;

      // Threshold: at least 45px horizontal swipe and primarily horizontal movement
      if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY) * 1.3) {
        if (diffX < 0) {
          this.nextImage();
        } else {
          this.prevImage();
        }
      }
    }
  }

  currentGalleryItem(): ProjectGalleryItem | null {
    const project = this.activeModalProject();
    if (!project || !project.gallery || project.gallery.length === 0) return null;
    return project.gallery[this.activeImageIndex()] || project.gallery[0];
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (!this.activeModalProject()) return;

    if (event.key === 'Escape') {
      this.closeGallery();
    } else if (event.key === 'ArrowRight') {
      this.nextImage();
    } else if (event.key === 'ArrowLeft') {
      this.prevImage();
    }
  }
}

