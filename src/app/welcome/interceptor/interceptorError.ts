import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorService } from 'src/app/services/error.service';

// TODO mrc error
// import { NotificationService } from '@shared/services/notification.service';

@Injectable()
export class GlobalHttpInterceptor implements HttpInterceptor {
    // TODO mrc error
//   constructor(private notificationService: NotificationService) {}
    constructor(private errorService: ErrorService) {}

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
        catchError((error: HttpErrorResponse) => {
            this.errorService.createBasicNotification();
            if (error.error instanceof ErrorEvent) {
            // Client side error
                console.log('Client side');
            } else {
                console.log('server side error');
                this.getError(error);
            // Server side error
            }
            return throwError(error);
        })
    );
}

private getError(error: HttpErrorResponse) {
    let errorMessage: string;
    switch (error.status) {
        case 400:
            errorMessage = 'Por favor, revisa tus datos';
            break;
        case 500:
            errorMessage = 'Error en el servidor';
            break;
        case 503:
            errorMessage = 'Servicio no disponible';
            break;
        case 504:
            errorMessage = 'El servidor no ha respondido';
            break;
        default:
            errorMessage = 'Error desconocido';
            break;
    }

    this.showErrorNotification(errorMessage);
}

    private showErrorNotification(text: string) {
        // this.notificationService.open(text, 'Aceptar', ['danger-snackbar']);
    }
}
