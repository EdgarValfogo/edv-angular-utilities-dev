import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'edv-responsive-table',
    templateUrl: './responsive-table.component.html',
    styleUrls: ['./styles/responsive-table.component.scss']
})
export class EdvResponsiveTableComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}


@Component({
    // tslint:disable-next-line: component-selector
    selector: 'edv-row',
    template: `<ng-content select='edv-cell'></ng-content>`,
    styleUrls: ['./styles/row.component.scss'],
    // encapsulation: ViewEncapsulation.None
})
export class EdvRowComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'edv-header-row',
    template: `<ng-content select='edv-cell'></ng-content>`,
    styleUrls: [],
    // encapsulation: ViewEncapsulation.None
})
export class EdvHeaderRowComponent implements OnInit {

    constructor() { }

    ngOnInit(): void { }
}

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'edv-cell',
    template: `<div class='mobile-label'>{{ label }}</div><ng-content></ng-content>`,
    styleUrls: ['./styles/cell.component.scss'],
    // encapsulation: ViewEncapsulation.None
})
export class EdvCellComponent implements OnInit {

    @Input()
    public label = '';

    constructor() { }

    ngOnInit(): void { }
}
