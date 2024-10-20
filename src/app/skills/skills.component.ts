import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import * as tablerIcons from '@ng-icons/tabler-icons'; 


export const skills = [
  { name: 'JavaScript', icon: 'tablerBrandJavascript', color: '#f0db4f' },
  { name: 'React', icon: 'tablerBrandReact', color: '#61dafb' },
  { name: 'Node.js', icon: 'tablerBrandNodejs', color: '#68a063' },
  { name: 'Docker', icon: 'tablerBrandDocker', color: '#0db7ed' },
  { name: 'C++', icon: 'tablerBrandCpp', color: '#00599C' },
  { name: 'Python', icon: 'tablerBrandPython', color: '#306998' }
];


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  viewProviders: provideIcons(tablerIcons)
})
export class SkillsComponent {
  skills = skills;
}
