import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IResponse, User } from '../interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usuariosGet: Subject<IResponse> = new Subject<IResponse>();
  public usuariosGet$ = this.usuariosGet.asObservable();
  crearUsuario?: boolean = true;
  constructor(private http: HttpClient) {}

  getUser(skip: number | string = 0): Observable<any> {
    const params = new HttpParams().set('skip', skip!);
    return this.http.get<any>(`${environment.server}/users`, { params }).pipe(
      // tap(data => console.log(data)),
      tap((data) => this.usuariosGet.next(data))
    );
  }

  getUserA(url: string): Observable<User> {
    return this.http.get<User>(url);
  }

  crearUsuarioObser(user: User): Observable<User> {
    return this.http.post<User>(`${environment.server}/users`, user);
  }

  actualizarUser(user: User): Observable<User> {
    console.log(user._id);
    return this.http.put<User>(`${environment.server}/users/${user._id}`, user);
  }

  eliminarUsuario(id: string): Observable<User> {
    console.log('id :>> ', id);
    return this.http.delete<User>(`${environment.server}/users/${id}`, {});
  }
}
