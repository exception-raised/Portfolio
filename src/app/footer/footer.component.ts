import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { tablerBrandGithub, tablerBrandLeetcode, tablerBrandLinkedin, tablerBrandStackoverflow } from '@ng-icons/tabler-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  viewProviders: [provideIcons({ tablerBrandGithub, tablerBrandLeetcode, tablerBrandLinkedin, tablerBrandStackoverflow })]

})
export class FooterComponent {

}
