import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  message:string ='';
  count=0;
  constructor() { }

  CountIncreaseByone(){
    this.count=this.count+1;
    this.message='Counter:'+ this.count;
  }
  CountDecreaseByone(){
    this.count=this.count-1;
    this.message='Counter:'+ this.count;
  }
  ngOnInit(): void {
  }

}
