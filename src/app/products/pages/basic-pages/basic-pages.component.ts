import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-pages',
  templateUrl: './basic-pages.component.html',
  styleUrl: './basic-pages.component.css'
})
export class BasicPagesComponent {
  public nameLower = 'angular';
  public nameUpper = 'ANGULAR';
  public nameFull = 'aNgUlAr';

  public customDate: Date = new Date();
}
