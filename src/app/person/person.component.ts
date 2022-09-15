import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

    
    $(document).ready(function(){
     
      $("button").click(function(){
        var div=$('#animate');
        div.animate({left:'100px'},'slow');
        div.animate({fontsize:'5em'},'slow');
        div.animate({
          opacity: 0.25,
          left: "+=50",
          height: "toggle"
        }, 5000, function() {
          // Animation complete.
        });
      });
    });
    console.log(localStorage.getItem('localData'));
    console.log(sessionStorage.getItem('SessionData'));
    console.log(JSON.parse(localStorage.getItem('userid')||''));

    //use of jquery
    

  }

  close(){
     this.router.navigate([{outlets:{personlist:null}}]);
  }


}
