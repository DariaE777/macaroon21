import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[buttonBackground]'
})
export class ButtonBackgroundDirective implements OnInit{

  constructor(private el:ElementRef) { }

  @HostListener('mouseover')
  onFocus() {
    this.changeElementBgColor('pink');
  }
  @HostListener('mouseout')
  onBlur() {
    this.changeElementBgColor('red');
  }

  ngOnInit() {
    this.changeElementBgColor('red');
    this.el.nativeElement.style.backgroundImage = 'none';
  }

  changeElementBgColor(color:string) {
      this.el.nativeElement.style.backgroundColor = color;
  }

}
