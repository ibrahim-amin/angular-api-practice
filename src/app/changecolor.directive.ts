import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective  implements AfterViewInit{

  constructor(private elref:ElementRef) { }
    ngAfterViewInit(): void {
      this.elref.nativeElement.style.color='red';
    }

    change(changedcolor:string){
      this.elref.nativeElement.style.color=changedcolor;
    }
}
