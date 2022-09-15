import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-counter-parent',
  templateUrl: './counter-parent.component.html',
  styleUrls: ['./counter-parent.component.css']
})
export class CounterParentComponent implements OnInit {
@ViewChild(CounterComponent) countercomponent!:CounterComponent;

  constructor() { }

  Increase(){
    this.countercomponent.CountIncreaseByone();
  }
  Decrease(){
    this.countercomponent.CountDecreaseByone();
  }

  ngOnInit(): void {
  }

}
