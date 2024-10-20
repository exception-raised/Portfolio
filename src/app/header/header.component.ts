import { Component } from '@angular/core';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { tablerBrandGithub, tablerBrandLeetcode, tablerBrandLinkedin, tablerBrandStackoverflow } from '@ng-icons/tabler-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  viewProviders: [provideIcons({ tablerBrandGithub, tablerBrandLeetcode, tablerBrandLinkedin, tablerBrandStackoverflow })]
})
export class HeaderComponent {

}
