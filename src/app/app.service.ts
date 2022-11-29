import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from './response.interface';



@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(
    private http: HttpClient,
  ) { }

  private imagesUrl = 'https://images-api.nasa.gov'

  getImages(value: string = "moon"): Observable<Response> {
    return this.http.get<Response>(this.imagesUrl + '/search?q=' + value)
  }
}

