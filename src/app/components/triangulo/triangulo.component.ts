// src/app/components/triangulo/triangulo.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonInput, IonButton, IonImg } from '@ionic/angular/standalone';
import { TrianguloEscaleno } from '@models/triangulo-escaleno';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  standalone: true,
  styleUrls: ['./triangulo.component.scss'],
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
export class TrianguloComponent {
  ladoA: number = 0;
  ladoB: number = 0;
  ladoC: number = 0;
  perimetro: number | null = null;

  calcularPerimetro() {
    if (this.ladoA && this.ladoB && this.ladoC) {
      const triangulo = new TrianguloEscaleno(this.ladoA, this.ladoB, this.ladoC);
      this.perimetro = triangulo.calcularPerimetro();
    }
  }
}
