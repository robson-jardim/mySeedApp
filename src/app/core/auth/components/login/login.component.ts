import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../shared/guard/auth.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService,
              private translate: TranslateService) { }

  ngOnInit() {
  }

}
