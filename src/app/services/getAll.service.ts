import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GetAllService {

  private readonly charactersURL = '/character';

  constructor(private http: HttpClient) { }

  public getAllCharacters() {
    return this.http.get(`${environment.BASE_URL}${this.charactersURL}`)
  }
}