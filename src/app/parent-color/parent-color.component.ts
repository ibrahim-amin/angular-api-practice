import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangecolorDirective } from '../changecolor.directive';

@Component({
  selector: 'app-parent-color',
  templateUrl: './parent-color.component.html',
  styleUrls: ['./parent-color.component.css']
})
export class ParentColorComponent implements OnInit {
  @ViewChild(ChangecolorDirective) changecolordirective!:ChangecolorDirective;
  constructor() { }

  ngOnInit(): void {
  }

  changecolor(changecolor:string){
    this.changecolordirective.change(changecolor);
  }

}
