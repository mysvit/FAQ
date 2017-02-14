import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'sv-dropdown',
  template: `
    <div class="input-group">
      <label for="dropdownComponent">
        <span *ngIf="this.isMandatory">*</span>{{this.label}}
      </label>
      <select
        id="dropdownComponent"
        class="form-control"
        [(ngModel)]="this.selectedValue"
        (ngModelChange)="this.selectItem()">
        <option *ngFor="let value of this.listValues" [value]="value.value">{{value.label}}</option>
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
