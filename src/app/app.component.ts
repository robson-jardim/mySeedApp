import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { LayoutModule } from './core/layout/layout.module'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

}
