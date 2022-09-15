import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('localData','local_Ahmad');
    sessionStorage.setItem('SessionData','Session course');
    //remove item
    //localStorage.removeItem('localData');
    // localStorage.clear();
   let obj={name:"Ahmad",Job:'Doctor'};
   localStorage.setItem('userid',JSON.stringify(obj));

    console.log(localStorage.getItem('localData'));
    console.log(sessionStorage.getItem('SessionData'));
    console.log(JSON.parse(localStorage.getItem('userid')||''));

  }

}
