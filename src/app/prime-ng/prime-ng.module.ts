import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  exports: [
    MenuModule,
    MenubarModule,
    InputTextModule,
  ]
})
export class PrimeNgModule { }
