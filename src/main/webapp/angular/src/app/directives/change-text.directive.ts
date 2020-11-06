import { Directive, ElementRef,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {

  constructor(private elementRef:ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor  = 'red';
    this.elementRef.nativeElement.style.color  = 'yellow';
   }
   @HostBinding('style.background-color') backgroundColor:string;

   @HostListener('mouseenter') onHover(){
       this.backgroundColor='orange';
   }

   @HostListener('mouseout') onLeave(){
    this.backgroundColor='red';
}

}
