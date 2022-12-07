import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { modalModule } from '../modal/modal.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    modalModule,
    FormsModule,
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
