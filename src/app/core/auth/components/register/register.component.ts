import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../shared/guard/auth.service';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor(public authService: AuthService,
              private translate: TranslateService) { }

  ngOnInit() {
  }

}
