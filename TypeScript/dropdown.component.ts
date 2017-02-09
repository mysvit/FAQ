import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'dropdown',
  template: `
    <ul>
      <li *ngFor="let value of values" (click)="selectItem(value.value)">{{value.label}}</li>
    </ul>
  `
})
export class DropdownComponent {
  @Input()
  values: DropdownValue[];

  @Output()
  select: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  selectItem(value) {
    this.select.emit(value);
  }
}

export class DropdownValue {
  value:string;
  label:string;

  constructor(value:string,label:string) {
    this.value = value;
    this.label = label;
  }
}
