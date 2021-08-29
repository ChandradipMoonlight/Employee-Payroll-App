import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private mainUrl: string = "http://localhost:8082/"

  constructor(private httpClient: HttpClient) { }

  getEmployeeData(): Observable<any>{
    return this.httpClient.get(this.mainUrl+"get");
  }

  addEmployeeData(employee: any): Observable<any> {
    return this.httpClient.post(this.mainUrl+"add", employee);
  }
}
