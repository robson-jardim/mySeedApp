import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../shared/guard/auth.service';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.sass']
})
export class ForgotComponent implements OnInit {

  constructor(public authService: AuthService,
              private translate: TranslateService) { }

  ngOnInit() {
  }

}
