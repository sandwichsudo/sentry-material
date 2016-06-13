import { Component } from '@angular/core';

import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'test-ng-mat-2-app',
  templateUrl: 'test-ng-mat-2.component.html',
  styleUrls: ['test-ng-mat-2.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MdIcon],
  providers: [MdIconRegistry]

})
export class TestNgMat2AppComponent {
  title = 'Sentry';
}
