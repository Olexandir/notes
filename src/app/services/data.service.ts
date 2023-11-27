import { Observable, of } from "rxjs";
import { DefaultResponse } from "../interfaces/default-responce.interface";

export abstract class DataService<T> {
  constructor() {}

  getAll(): Observable<T[]> {
    return of([]);
  }

  // getById(id: number): Observable<T> {
  //   return of();
  // }

  // add(data: T): Observable<T> {
  //   return of();
  // }

  // edit(data: T): Observable<T> {
  //   return of();
  // }

  // delete(id: number): Observable<DefaultResponse> {
  //   return of();
  // }
}
