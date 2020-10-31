import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { Resto } from '../model/resto';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  private rooturl = "http://localhost:3000/api/List/"
  constructor(private http:HttpClient) { }

  getResto(): Observable<Resto[]>{
    return this.http.get<Resto[]>(this.rooturl)
  }
}
