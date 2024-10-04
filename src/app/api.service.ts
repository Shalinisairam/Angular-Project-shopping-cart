import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({ providedIn: 'root' })
export class ApiService {

  private apisUrl = 'http://localhost:3456';  

  constructor(
    private http: HttpClient
    ) {

    }

}