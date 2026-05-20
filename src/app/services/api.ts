import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient,
  ) { }

  private apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

  listarCards(id?: string | null) {
    const link = id ? this.apiUrl + `?id=${id}` : this.apiUrl;
    return this.http.get(link)
  }
}
