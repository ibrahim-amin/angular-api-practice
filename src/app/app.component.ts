import { Component } from '@angular/core';
import {  Observable } from 'rxjs';
import { Book } from './book';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { BookService } from './book.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapi';
   softBooks:Book[]= [];
   // geting data through async pipe
   softBooks1!:Observable<Book[]>;
   softBooks2!:Observable<Book>;
   BookName!:Observable<string>;
   datamessage='';

   bookForm1!:FormGroup;

   constructor(private formbuilder:FormBuilder,private bookservice:BookService){
   }
  
   ngOnInit(){

    this.bookForm1=this.formbuilder.group({
      name:['',[Validators.required]],
      category:['',[Validators.required]],
      writer:['',[Validators.required]],

    })

    this.getsoftBooks();
    this.getsoftBooks1();
    this.getBookName();
    this.getBookNamewithmap();

    //post function
    

   }

   getsoftBooks(){
    // this.bookservice.getBooksFromStore().subscribe(books=>{this./this.softBooks=books})
    // this.bookservice.getBooksFromStore().subscribe(bo=>{this.softBooks=bo})
    // geting data through async pipe
    this.softBooks1 = this.bookservice.getBooksFromStore();
    
   }

   //getting specific book 

   getsoftBooks1(){
    
    this.softBooks2 = this.bookservice.getBooksFromStore1(100);
   }

   //map function usage
   
   getBookName(){
    
    this.BookName = this.bookservice.getBooksFromStore2(100).pipe(map(book=>'Name:' +book.name));
   }

   //map with subsribe method
     BookName1!:string;
   getBookNamewithmap(){
    this.bookservice.getBooksFromStore2(100).pipe(map(book=>book.name)).subscribe(name=>{this.BookName1=name})
 
    
   }

   //post funtion
datasaved=false;
onFormSubmit(){
  this.datasaved=false;
  let book=this.bookForm1.value;
  this.createbo(book);
  this.bookForm1.reset();
}

createbo(book:Book){
  if(this.bookidtoedit==''){

    this.bookservice.createbook(book).subscribe(
      book=>{
        this.datasaved=true;
        this.datamessage="Data Saved Succesfully"
        this.getsoftBooks();
        this.bookidtoedit='';

      }
      )
    }
    else{
      book.id=this.bookidtoedit;
      this.bookservice.Updatebook(book).subscribe(
        book=>{
          this.datasaved=true;
          this.datamessage="Record Updated Succesfully";
          this.getsoftBooks();
          this.bookidtoedit='';
        }
      )
    }

}

// put method
 bookidtoedit= '';
booktoEdit(bookid:string){
  alert('working');
 this.bookservice.getbookbyid(bookid).subscribe(book=>{
  this.bookidtoedit=bookid
  this.bookForm1.controls['name'].setValue(book.name)
  this.bookForm1.controls['category'].setValue(book.category)
  this.bookForm1.controls['writer'].setValue(book.writer)
})
}

//Delete Funtion

booktoDelete(bookid:string){
  this.bookservice.Deltebook(bookid).subscribe(
    book=>{
      this.datamessage="Record Delete Succesfully"
      this.getsoftBooks();

  })
}


// ng template
display=false;

books=[
  {id:1,name:'Asp.net',price:'25'},
  {id:2,name:'C#',price:45},
  {id:3,name:'Angular',price:30},

]

}
