import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'sv-number',
  template: `
    <div class="input-group" >
      <label for="numberComponent">
        <span *ngIf="this.isMandatory">*</span>{{this.label}}
      </label>
      <input
        type="number"
        id="numberComponent"
        class="form-control text-md-right"
        [(ngModel)]="this._selectedValue"
        (blur)="this.onBlure()"
      >
    </div>  
  `
})

export class NumberComponent {
  @Input()
  isMandatory: boolean;

  @Input()
  label: string;

  @Input()
  set selectedValue(value: any) {
    value?
      this._selectedValue = value
      : this._selectedValue = '0'; // for null
  }

  @Output()
  onChange: EventEmitter<any> = new EventEmitter();

  private _selectedValue;

  constructor() {
  }

  private onBlure() {
    this.onChange.emit(this.checkNumber());
  }

  private checkNumber(): any {
    if (Number(this._selectedValue)? false : true)
      //for null or NaN or Udifined
      return this._selectedValue = '0';
    else
      return new Number(this._selectedValue);
  }

}
