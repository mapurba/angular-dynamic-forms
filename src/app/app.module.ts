import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationModule, PageHeaderModule, SidePanelModule, TabsetModule } from '@ux-aspects/ux-aspects';
import { DynamicFormModule } from '@netiq/dynamic-forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnguarFormsComponent } from './demos/anguar-forms/anguar-forms.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

@NgModule({
  declarations: [
    AppComponent,
    AnguarFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageHeaderModule,
    NavigationModule,
    SidePanelModule,
    DynamicFormModule,
    TabsetModule,
    HighlightModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml')
        },
        themePath: 'path-to-theme.css' // Optional, and useful if you want to change the theme dynamically
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
