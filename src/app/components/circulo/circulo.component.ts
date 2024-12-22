import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonInput, IonButton, IonImg } from '@ionic/angular/standalone';
import { Circulo } from '@models/circulo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  standalone: true,
  styleUrls: ['./circulo.component.scss'],
  imports: [
    FormsModule,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonImg,
    CommonModule
  ]
})
export class CirculoComponent {
  radio: number = 0;
  perimetro: number | null = null;

  calcularPerimetro() {
    if (this.radio) {
      const circulo = new Circulo(this.radio);
      this.perimetro = circulo.calcularPerimetro();
    }
  }
}
