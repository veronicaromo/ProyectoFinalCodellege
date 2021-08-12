import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  constructor(private http:HttpClient) {
    
  }

  getQuery(query:string){
    const headerDict = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
      }
      
      const requestOptions = {
      headers: new HttpHeaders(headerDict),
      };
    
      let direccion = `http://localhost:3000/${query}`;
    return this.http.get(direccion);
  }


  getBooks(){ // Mostrar todos los libros
    return this.getQuery("books").pipe(map(data=>{
      console.log(data);
      return data; // Pasa por el pipe, y regresa la data
    }));
  }

  getBook(){ // Mostrar un libro
    return this.getQuery("books/:id").pipe(map(data=>{
      return data;
    }))
  }

  deleteBook(id:any){
    return this.http.delete(`http://localhost:3000/books/${id}`).pipe(map(data=>{
      return data;
    }));
  }

  
}
