import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }
  url = "https://simple-books-api.glitch.me/books";
  books(){
    return this.http.get(this.url)
  }
}
