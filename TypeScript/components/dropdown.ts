import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'dropdown',
  template: `
    <div >
      <label >
        <span *ngIf="isMandatory">*</span>{{label}}
      </label>
      <select class="form-control" [(ngModel)]="selectedValue" (ngModelChange)="selectItem()"> 
        <option *ngFor="let value of listValues" [value]="value.value">{{value.label}}</option>
      </select>

    </div>
  `
})

export class DropdownComponent {
  @Input()
  isMandatory: string;

  @Input()
  label: string;

  @Input()
  listValues: Array<DropdownValue> = [];

  @Output()
  onSelect: EventEmitter<string> = new EventEmitter<string>();

  private selectedValue: string;

  constructor() {
  }

  selectItem() {
    console.log("itemValue: " + this.selectedValue);
    this.onSelect.emit(this.selectedValue);
  }
}

export class DropdownValue {
  value: string;
  label: string;

  constructor(value: string, label: string) {
    this.value = value;
    this.label = label;
  }
}
