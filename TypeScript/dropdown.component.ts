import {Component, Input, Output, EventEmitter, OnInit} from "@angular/core";

@Component({
  selector: 'dropdown',
  template: `
    <div >
      <label >
        <span *ngIf="isMandatory">*</span>{{label}}
      </label>
      <select class="form-control" [(ngModel)]="selectedValue" (ngModelChange)="selectItem()"> 
        <option *ngFor="let value of listValues?.items" [value]="value.itemValue">{{value.itemText}}</option>
      </select>

    </div>
  `
})
export class DropdownComponent implements OnInit{
  @Input()
  isMandatory: string;

  @Input()
  label: string;

  @Input()
  pickerId: Muid;

  @Output()
  onSelect: EventEmitter<string> = new EventEmitter<string>();

  private listValues: any;
  private selectedValue: string;

  constructor(private xtBroker: BrokerService) {
  }

  ngOnInit() {
    this.listValues.push({itemValue: '1', itemText: 'Text'});
    this.listValues.push({itemValue: '2', itemText: 'Text'});
    this.listValues.push({itemValue: '3', itemText: 'Text'});
  }

  selectItem() {
    console.log("itemValue: " + this.selectedValue);
    this.onSelect.emit(this.selectedValue);
  }
}
