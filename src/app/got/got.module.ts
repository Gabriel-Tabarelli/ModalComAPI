import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GotComponent } from './got.component';
import { FormsModule } from '@angular/forms';
import { modalModule } from '../modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    modalModule
  ],
  declarations: [
    GotComponent
  ]
})

export class GotModule { }
