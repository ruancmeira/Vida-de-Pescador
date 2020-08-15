 
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

	token: any;
  	storage: any;

	// API path
	base_path = 'http://localhost:3000/posts';

	constructor(public http: HttpClient) {
		if (localStorage.getItem("PS:USER_INFO")) {
			this.storage = JSON.parse(localStorage.getItem("PS:USER_INFO"));
			this.token = this.storage.token;
		}
	}

	httpOptions = {
		headers: new HttpHeaders({
		  'Content-Type':  'application/json',
		  'x-token-access': this.token
		})
	};

	// Handle API errors
	handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error('An error occurred:', error.error.message);
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong,
			console.error(
				`Backend returned code ${error.status}, ` +
				`body was: ${error.error}`);
		}
		// return an observable with a user-facing error message
		return throwError('Something bad happened; please try again later.');
	};
	
	getList(): Observable<Post> {
		// const headers = new HttpHeaders({
		// 	Authorization: 'Basic YXBpOmViYzg3Njg5MjhiZjE1NGIyMTg4NGZlMjU5MDA3NDllMGU0MTRmZGM=',
		// 	merchant_id: '105',
		// 	merchant_user_id: '90'
		//   });
		if (this.token) {
			return this.http.get<Post>(this.base_path + `?token=${this.token}`)
			.pipe(
				retry(2),
				catchError(this.handleError)
			)
		}
	}
}