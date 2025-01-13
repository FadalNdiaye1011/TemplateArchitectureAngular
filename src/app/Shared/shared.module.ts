// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
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

    ReactiveFormsModule,
  ],
  exports: [
    HttpClientModule,
    LoaderComponent,
    PaginationComponent,
    ShortedStringPipe,
    // BaseComponent,
    ReactiveFormsModule,
  ]
})
export class SharedModule {}
