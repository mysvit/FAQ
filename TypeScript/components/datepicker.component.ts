import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'sv-datepicker',
  templateUrl: `
    <div class="input-group" >
      <label for="datePickerComponent">
        <span *ngIf="this.isMandatory">*</span>{{this.label}}
      </label>

      <div class="input-group">
        <input
          id="datePickerComponent"
          class="form-control xt-datepicker"
          [placeholder]="this.principalService.currentPrincipal.userPreference.defaultDateFormat.id"
          ngbDatepicker #d="ngbDatepicker"
          [(ngModel)]="this._selectedValue"
        />
        <div class="input-group-addon xt-calendar-icon" (click)="d.toggle()">
          <i class="fa fa-calendar"></i>
        </div>
      </div>

    </div>
  `
})

export class DatePickerComponent {
  @Input()
  isMandatory: boolean;

  @Input()
  label: string;

  @Input()
  set selectedValue(value: any) {
    console.log('selectedValue: '+ value);
    if (value? true : false) {
      //Is Not null
      let d = new Date(value);
      this.workValue = { day: d.dateTime.getUTCDate(), month: d.dateTime.getUTCMonth() + 1, year: d.dateTime.getUTCFullYear()};
    } else {
      this.workValue = value;
    }
  }

  @Output()
  onChange: EventEmitter<any> = new EventEmitter();

  set _selectedValue(value: any) {
    console.log('_selectedValue: '+ value);
    this.workValue = value;

    //call onChange
    if (value? true : false) {
      //Is Not null
      let d = new Date(value.year, value.month - 1, value.day);
      this.onChange.emit(d.dateTime);
    }
  }

  get _selectedValue(){
    return this.workValue;
  }

  private workValue;

  constructor() {
  }

}
