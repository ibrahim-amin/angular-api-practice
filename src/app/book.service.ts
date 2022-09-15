import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
 bookUrl="/api/books";
  constructor(private http:HttpClient) { }
  getBooksFromStore():Observable<Book[]>{
    return this.http.get<Book[]>(this.bookUrl);
  }

  //get specific book data
  getBooksFromStore1(id:number):Observable<Book>{
    return this.http.get<Book>(this.bookUrl+"/"+id);
  }

  getBooksFromStore2(id:number):Observable<Book>{
    return this.http.get<Book>(this.bookUrl+"/"+id);
  }

  createbook(book:Book):Observable<Book>{
     let httpheader= new HttpHeaders().set('Content_Type','application/json');
    let options={
      headers:httpheader
    };
    return this.http.post<Book>(this.bookUrl,book,options)

  }


 



 getbookbyid(bookid:string){
  return this.http.get<Book>(this.bookUrl+"/"+bookid);
 }

 Updatebook(book:Book):Observable<number>{
  let httpheader= new HttpHeaders().set('Content_Type','application/json');
 let options={
   headers:httpheader
 };
 return this.http.put<number>(this.bookUrl+"/"+ book.id,book,options)

}

Deltebook(bookid:string):Observable<string>{
  let httpheader= new HttpHeaders().set('Content_Type','application/json');
 let options={
   headers:httpheader
 };
 return this.http.delete<string>(this.bookUrl+"/"+ bookid)

}
 
}
