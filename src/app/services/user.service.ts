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

  constructor(private http: HttpClient) { }

  getUser(skip?: number|string): Observable<any>{
    const params = new HttpParams().set('skip', skip!);
    return this.http.get<any>(`${environment.server}/users`, {params})
      .pipe(
        // tap(data => console.log(data)),
        tap(data => this.usuariosGet.next(data))
      );
  }

  getUserA(url:string): Observable<User>{
    return this.http.get<User>(url);
  }
}
