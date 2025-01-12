import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AlertService } from '../../../shared/services/alert.service';
import { Login } from '../../interfaces/login';
import { ResponsesData } from '../../../shared/interfaces/response-data';
import { UserLogin } from '../../interfaces/user-login';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formAuthenticate: FormGroup = new FormGroup({});
  erroLogin: string = '';
  actifLoader: boolean = false;


  constructor(private fb: FormBuilder,
    private authService: AuthService,
     private router: Router,
      private sweetAlert: AlertService) {
   this.formAuthenticate = this.fb.group({
     username: ["", [Validators.required]],
     password: ["", [Validators.required]]
   })
 }

 get email() {
  return this.formAuthenticate.get('username');
}
get password() {
  return this.formAuthenticate.get('password');
}


login() {
  this.actifLoader = true;
  this.authService.postData<Login, ResponsesData<UserLogin>>("login", this.formAuthenticate.value).subscribe({
    next: (value) => {
      if (value.status) {
        localStorage.setItem(environment.appName + "_token", value.data.token);
        localStorage.setItem(environment.appName + '_user', JSON.stringify(value.data.user));
        this.actifLoader = false;
        this.erroLogin = "";
        this.router.navigateByUrl('');
      }
      else {
        this.actifLoader = false;
        this.erroLogin = value.message;
      }
    },
    error: (err) => {
      this.actifLoader = false;
      this.erroLogin = err.message;
      console.log(err);

    }
  });

}


}
