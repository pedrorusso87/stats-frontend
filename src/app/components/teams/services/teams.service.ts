import {Injectable} from "@angular/core";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  apiUrl = environment.API_URL;
  constructor(private httpClient: HttpClient){}

  public getTeams(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/teams/all`);
  }
}
