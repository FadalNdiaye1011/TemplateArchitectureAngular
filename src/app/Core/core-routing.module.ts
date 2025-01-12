import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './components/core/core.component';

const routes: Routes = [
  {
    path: "", component: CoreComponent, children: [
      {
        path: "", loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule)
      },
      {
        path: "chambre", loadChildren: () => import("./chambre/chambre.module").then(m => m.ChambreModule),
      },
      {
        path: "maison", loadChildren: () => import("./maison/maison.module").then(m => m.MaisonModule),
      },
      {
        path: "appartement", loadChildren: () => import("./appartement/appartement.module").then(m => m.AppartementModule),
      },
      {
        path: "studio", loadChildren: () => import("./studio/studio.module").then(m => m.StudioModule),
      },
      {
        path: "location", loadChildren: () => import("./location/location.module").then(m => m.LocationModule),
      },
      {
        path: "vente", loadChildren: () => import("./vente/vente.module").then(m => m.VenteModule),
      },

      {
        path: "**", redirectTo: ""
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
