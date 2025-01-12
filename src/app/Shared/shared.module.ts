// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ShortedStringPipe } from './pipes/shorted-string.pipe';



@NgModule({
  declarations: [
    LoaderComponent,
    PaginationComponent,
    ShortedStringPipe,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,  // Assurez-vous que MatIconModule est importé si vous utilisez des icônes Material
    ReactiveFormsModule,
  ],
  exports: [
    HttpClientModule,
    LoaderComponent,
    PaginationComponent,
    ShortedStringPipe,
    // BaseComponent,
    ReactiveFormsModule,
    MatIconModule, // Si vous exportez les modules qui sont utilisés dans d'autres modules
  ]
})
export class SharedModule {}
