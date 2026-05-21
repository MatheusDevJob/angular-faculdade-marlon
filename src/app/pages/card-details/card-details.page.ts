import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonChip, IonImg, IonButtons, IonBackButton, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api';
import { TextoSeparadoIfenPipe } from 'src/app/pipes/texto-separado-ifen-pipe';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.page.html',
  styleUrls: ['./card-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonChip, IonImg, IonButtons, IonBackButton, IonCardTitle, IonCardSubtitle, TextoSeparadoIfenPipe]
})
export class CardDetailsPage implements OnInit {
  id: string | null = null;
  item: any
  carregando: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,

  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getOneCard(this.id)
  }

  getOneCard(id: string | null) {
    this.carregando = true;

    return this.api.listarCards(id).subscribe({
      next: (res: any) => {
        this.item = res.data[0];
        this.carregando = false;
      },
      error: (error) => {
        console.error(error);
        this.carregando = false;
      }
    });
  }
}