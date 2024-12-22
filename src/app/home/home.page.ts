import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { CirculoComponent } from '@components/circulo/circulo.component';
import { TrianguloComponent } from '@components/triangulo/triangulo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSelect,
    IonSelectOption,
    CirculoComponent,
    TrianguloComponent,
    CommonModule
  ]
})
export class HomePage {
  figuraSeleccionada: string = '';
}
