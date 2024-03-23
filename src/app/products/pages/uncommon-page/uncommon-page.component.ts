import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18Select
  public name: string = 'Kenner';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient() {
    this.name = 'Sofía';
    this.gender = 'female';
  }

  // i18Plural
  public clients: string[] = ['Kenner', 'Sofía', 'Fernando', 'María', 'Carlos', 'Ana', 'Pedro', 'Laura', 'Jorge', 'Diana'];
  public clientsMap = {
    '=0': 'no hay clientes',
    '=1': 'tenemos # cliente',
    'other': 'tenemos # clientes'
  }

  deleteClient() {
    this.clients.shift();
  }

  //keyValuePipe
  public person = {
    name: 'Kenner',
    age: 29,
    address: 'Calle 123, Ciudad 456'
  }

  //asyncPipe
  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log('timer: ', value)),
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
