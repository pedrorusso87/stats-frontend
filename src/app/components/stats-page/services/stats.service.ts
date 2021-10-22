import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  apiUrl = environment.API_URL;
  constructor(private httpClient: HttpClient){}

  public getTournamentList(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/tournaments/all`);
  }
}