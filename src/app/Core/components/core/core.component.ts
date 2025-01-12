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
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        position:"relative",
        left: -1000,
      })),
      state('*', style({
        position:"relative",
        left: 0,
      })),
      transition(':enter, :leave', [
        animate('300ms ease-in-out'),
      ])
    ]),

    trigger('dropdownProfil', [
      state('void', style({
        clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      })),
      state('*', style({
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      })),
      transition(':enter, :leave', [
        animate('300ms ease-in-out'),
      ])
    ])
  ]
})
export class CoreComponent {
  constructor(private router: Router, private authService: AuthService, private alertService: AlertService) { }
  // ngOnInit(){
  //   defineElement(lottie.loadAnimation);
  // }

  fadeInOutState = '';
  dropdownProfilState="";

  isSearchPanelOpen: boolean = false;
  isNotificationPanelOpen: boolean = false;
  isDropDownPanelOpen: boolean = false;



  openSearchPanel() {
    this.isSearchPanelOpen = !this.isSearchPanelOpen;
  }

  openNotificationPanel() {
    this.isNotificationPanelOpen = !this.isNotificationPanelOpen;
  }


  dropdownopen(){
    this.isDropDownPanelOpen = !this.isDropDownPanelOpen;
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
function defineElement(loadAnimation: any) {
  throw new Error('Function not implemented.');
}

