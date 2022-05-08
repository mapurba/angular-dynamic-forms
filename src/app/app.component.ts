import { Component } from '@angular/core';
import { NavigationItem } from '@ux-aspects/ux-aspects';
import { HighlightLoader } from 'ngx-highlightjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-dynamic-forms';
  constructor(private hljsLoader: HighlightLoader) {
  }


  navigation: NavigationItem[] = [
    {
      title: 'Dynamic Forms',
      // routerLink: ['/dynamic-forms',],
      children: [
        {
          title: 'Simple Dynamic Forms',
          routerLink: ['/dynamic-forms', 'simple'],
        },
        {
          title: 'All Types of Forms ',
          routerLink: ['/dynamic-forms', 'all']
        },
        {
          title: 'Multi Value form',
          routerLink: ['/dynamic-forms', 'multiValue']
        },
        {
          title: 'Type Ahead Input Form',
          routerLink: ['/dynamic-forms', 'typeAhead']
        },

      ]
    },
  ];

}
