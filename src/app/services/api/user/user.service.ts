import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, tap } from "rxjs";
import { DataStore } from "../../data.store";
import { DataService } from "../../data.service";
import { UserDTO } from "src/app/interfaces/user.dto.interface";

@Injectable({
  providedIn: "root",
})
export class UserService implements DataService<UserDTO> {
  public userList = new DataStore<UserDTO>();

  private readonly USER_URL = "/users";

  constructor(private http: HttpClient) {}

  getAll(): Observable<UserDTO[]> {
    return this.http
      .get<UserDTO[]>(`${environment.BASE_URL}${this.USER_URL}`)
      .pipe(tap((data) => this.userList.setData(data)));
  }
}
