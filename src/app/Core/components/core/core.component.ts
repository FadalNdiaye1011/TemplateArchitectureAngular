import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../Auth/services/auth.service';
import { AlertService } from '../../../shared/services/alert.service';
import { ResponsesData } from '../../../shared/interfaces/response-data';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrl: './core.component.css',
})
export class CoreComponent {
  openDropdownListAdd = false;
  openDropdownListNotif = false;
  openDropdownProfil = false
  constructor(private router: Router, private authService: AuthService, private alertService: AlertService) { }


  dropdown_menu_list(){
    this.openDropdownListAdd = !this.openDropdownListAdd
  }

  dropdown_notif(){
    this.openDropdownListNotif = !this.openDropdownListNotif
  }

  dropdown_profil(){
    this.openDropdownProfil = !this.openDropdownProfil
  }




  logout() {
    this.alertService.showConfirmation("Deconnexion", "Voulez vous vraiment vous déconnecter").then((result) => {
      if (result.isConfirmed) {
        this.authService.getData<ResponsesData<[]>>("logout").subscribe({
          next: (value ) => {
            if (value.status) {
              localStorage.clear();
              this.router.navigateByUrl('/auth');
            }

          },
          error: (err) => {
            this.alertService.showAlert({
              title: "Erreur",
              text: err.message,
              icon: "warning"
            })

          },
          complete: () => {

          }
        });


      }
    });



  }


  isActive(link: string): boolean {
    return this.router.isActive(link, true);
  }
}
