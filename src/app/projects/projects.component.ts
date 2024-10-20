import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import * as tablerIcons from '@ng-icons/tabler-icons'; 


export const projects = [
  {
    title: 'Blogger',
    description: 'A blogging website built with ReactJS, PostgreSQL, and NodeJS.',
    link: 'https://github.com/exception-raised/Blogger',
    icons: [
      { name: 'tablerBrandNodejs', color: '#68A063' },
      { name: 'tablerBrandAngular', color: 'red' },
      { name: 'tablerSql', color: '#f29111' },
      { name: 'tablerBrandDocker', color: '#2496ED' }
    ]
  },
  {
    title: 'ChessFair',
    description: 'Program that scours the official Chess.com API to find banned users that you played against.',
    link: 'https://github.com/exception-raised/chessfair',
    icons: [
      { name: 'tablerBrandNodejs', color: '#68A063' }
    ]
  },
  {
    title: 'LeetCodeDailyNotifier',
    description: 'Notifies you via email once a new daily Leetcode problem has been released.',
    link: 'https://github.com/exception-raised/DailyChallengeNotifier',
    icons: [
      { name: 'tablerBrandRust', color: '#DEA584' }
    ]
  },
  {
    title: 'StringReverser',
    description: 'A simple string reversing tool written in x86 assembly.',
    link: 'https://github.com/exception-raised/StringReverser',
    icons: [
      { name: 'tablerSettings', color: '#6c757d' },
      { name: 'tablerBrandC', color: '#61DBFB' }
    ]
  }
];


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  viewProviders: [provideIcons(tablerIcons)]

})
export class ProjectsComponent {
  projects = projects;

  
}
