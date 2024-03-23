import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-prime-ng';

  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
  }

}
