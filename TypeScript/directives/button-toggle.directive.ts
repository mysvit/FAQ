//USING
//    <button class="btn btn-primary" btnToggle [(ngModel)]="this.isToggle">
//        <i *ngIf="this.isToggle" class="fa toggle-on"></i>
//        <i *ngIf="this.isToggle" class="fa toggle-off"></i>
//        Toggle button
//    </button>

import {Directive, HostListener, Input, Self, HostBinding} from "@angular/core";
import {ControlValueAccessor, NgModel} from "@angular/forms";
@Directive({
    selector: "[btnToggle][ngModel]"
})

export class ButtonToggle implements ControlValueAccessor{

    //predefine state for toggle if necessary
    @Input() private btnToggleTrue:any;
    @Input() private btnToggleFalse:any;

    private value:any;
    private state:any;

    @HostBinding("style.background-color")
    backgroundColor:string;

    constructor(@Self() public cd:NgModel) {
        // hack !
        cd.valueAccessor = this;
    }

    @HostListener("click")
    private onClick() {
        this.toggle(!this.state);
        this.cd.viewToModelUpdate(this.value);
        this.backgroundColor = this.state ? "grey" : null;
    }

    ngOnInit() {
        this.toggle(this.trueValue === this.value);
    }

    private get trueValue() {
        return typeof this.btnToggleTrue !== "undefined" ? this.btnToggleTrue : true;
    }

    private get falseValue() {
        return typeof this.btnToggleFalse !== "undefined" ? this.btnToggleFalse : false;
    }

    private toggle(state:boolean) {
        this.state = state;
        this.value = this.state ? this.trueValue : this.falseValue;
    }

    // ControlValueAccessor
    // model -> view
    writeValue(value:any) {
        this.state = this.trueValue === value;
        this.value = value;
    }

    protected onChange = (_:any) => {};
    protected onTouched = () => {};

    registerOnChange(fn:(_:any) => {}):void {
        this.onChange = fn;
    }

    registerOnTouched(fn:() => {}):void {
        this.onTouched = fn;
    }

}
