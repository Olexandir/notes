import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { ToDoDTO } from "../../../interfaces/todo.dto.interface";
import { Observable, tap } from "rxjs";
import { DataStore } from "../../data.store";
import { DataService } from "../../data.service";

@Injectable({
  providedIn: "root",
})
export class TodoService implements DataService<ToDoDTO> {
  public todoList = new DataStore<ToDoDTO>();

  private readonly TODO_URL = "/todos";

  constructor(private http: HttpClient) {}

  getAll(): Observable<ToDoDTO[]> {
    return this.http
      .get<ToDoDTO[]>(`${environment.BASE_URL}${this.TODO_URL}`)
      .pipe(tap((data) => this.todoList.setData(data)));
  }
}
