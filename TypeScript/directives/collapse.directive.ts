import {Directive, Input, HostBinding} from '@angular/core';


@Directive({selector: '[collapse]'})
export class Collapse {

  @HostBinding("class.collapse.show")
  private isShow:boolean = true;

  @HostBinding("class.collapse")
  private isHide:boolean = false;

  @Input()
  private set collapse(value:boolean) {
    this.toggle(value);
  }

  constructor() {
  }

  toggle(value: boolean) {
    if (value) {
      this.show();
    } else {
      this.hide();
    }
  }

  hide() {
    this.isShow = false;
    this.isHide = true;
    console.log('hide');
  }

  show() {
    this.isShow = true;
    this.isHide = false;
    console.log('show');
  }
}
