import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements AfterViewInit {
@ViewChild('name') elname!:ElementRef;
@ViewChild('state') elstate!: ElementRef;
ngAfterViewInit(){
  this.elname.nativeElement.style.backgroundColor='black';
  this.elname.nativeElement.style.color='white';
  this.elstate.nativeElement.style.backgroundColor='cyne';
  this.elstate.nativeElement.style.color='red';
}
  constructor() { }

  ngOnInit(): void {
  }

}
