import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { Projects } from './projects/projects';
import { Experience } from './experience/experience';
import { Social } from './social/social';
import { About } from './about/about';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Projects, Experience, Social],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
