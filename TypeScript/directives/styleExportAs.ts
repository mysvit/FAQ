import {Directive, Input, HostBinding} from '@angular/core';


@Directive({
    selector: 'input',
    exportAs: 'myDP'
    })

export class myDP {

    @HostBinding("style.background-color")
    private color = "white"


    // @Input()
    // private set myDP(value: any) {
    //     console.log(value);
    // }

    constructor() {
    }

    myColor(value: any) {
        this.color = value;
        console.log(this.color);
    }

    myDate(value: any) {
        // value._cRef._nativeElement.attributes.style
        value.toggle();
        if (value._cRef != undefined)
            value._cRef._nativeElement.setAttribute("style", "background-color: blue;z-index: 2;overflow-x: hidden;");
        //     setTimeout(_ => {
        //         // value._cRef._nativeElement.style.slice(5,1);
        //         value._cRef._nativeElement.setAttribute("style", "background-color: blue;position: fixed; top: 100px; padding-left: 100px;");
        //         // value._cRef._nativeElement.attributes.style.nodeValue = "position: fixed; top: 100px; left: 100px"
        //         // value._cRef._nativeElement.attributes.style.value = ":host {position: fixed; top: 100px; left: 100px}"
        //     },1000);

        // console.log(value._cRef._nativeElement.attributes.style);
    }

}

// value._cRef._nativeElement.attributes.style.value += "background-color: red;position: fixed;z-index: 2;overflow-x: hidden;"

// _cRef._nativeElement.attributes.style.background-color
// { type: Component, args: [{
//     exportAs: 'ngbDatepicker',
//     selector: 'ngb-datepicker',
//     host: { 'class': 'd-inline-block rounded' },
//     styles: ["\n    :host {\n      border: 1px solid rgba(0, 0, 0, 0.125);\n    }\n   " +
//     " .ngb-dp-header {\n      border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n    }\n " +
//     "   .ngb-dp-month {\n      pointer-events: none;\n    }\n    ngb-datepicker-month-view {\n  " +
//     "    pointer-events: auto;\n    }\n    .ngb-dp-month:first-child {\n      margin-left: 0 !important;\n    }  " +
//     "  \n    .ngb-dp-month-name {\n      font-size: larger;\n      height: 2rem;\n      line-height: 2rem;\n   " +
//     " }    \n  "],
//     template: "\n    <template #dt let-date=\"date\" let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\">\n       <div ngbDatepickerDayView [date]=\"date\" [currentMonth]=\"currentMonth\" [selected]=\"selected\" [disabled]=\"disabled\"></div>\n    </template>\n    \n    <div class=\"ngb-dp-header bg-faded pt-1 rounded-top\" [style.height.rem]=\"getHeaderHeight()\" \n      [style.marginBottom.rem]=\"-getHeaderMargin()\">\n      <ngb-datepicker-navigation *ngIf=\"navigation !== 'none'\"\n        [date]=\"months[0]?.firstDate\"\n        [minDate]=\"_minDate\"\n        [maxDate]=\"_maxDate\"\n        [months]=\"months.length\"\n        [disabled]=\"disabled\"\n        [showWeekNumbers]=\"showWeekNumbers\"\n        [showSelect]=\"navigation === 'select'\"\n        (navigate)=\"onNavigateEvent($event)\"\n        (select)=\"onNavigateDateSelect($event)\">\n      </ngb-datepicker-navigation>\n    </div>\n\n    <div class=\"ngb-dp-months d-flex px-1 pb-1\">\n      <template ngFor let-month [ngForOf]=\"months\" let-i=\"index\">\n        <div class=\"ngb-dp-month d-block ml-3\">            \n          <div *ngIf=\"navigation !== 'select' || displayMonths > 1\" class=\"ngb-dp-month-name text-center\">\n            {{ i18n.getMonthFullName(month.number) }} {{ month.year }}\n          </div>\n          <ngb-datepicker-month-view\n            [month]=\"month\"\n            [selectedDate]=\"model\"\n            [dayTemplate]=\"dayTemplate || dt\"\n            [showWeekdays]=\"showWeekdays\"\n            [showWeekNumbers]=\"showWeekNumbers\"\n            [disabled]=\"disabled\"\n            [outsideDays]=\"displayMonths === 1 ? outsideDays : 'hidden'\"\n            (select)=\"onDateSelect($event)\">\n          </ngb-datepicker-month-view>\n        </div>\n      </template>\n    </div>\n  ",
//     providers: [NGB_DATEPICKER_VALUE_ACCESSOR]
