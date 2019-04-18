import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    EdvResponsiveTableComponent,
    EdvCellComponent,
    EdvRowComponent,
    EdvHeaderRowComponent
} from './components/responsive-table.component';

@NgModule({
    declarations: [
        EdvResponsiveTableComponent,
        EdvCellComponent,
        EdvRowComponent,
        EdvHeaderRowComponent,
    ],
    imports: [ CommonModule ],
    exports: [
        EdvResponsiveTableComponent,
        EdvCellComponent,
        EdvRowComponent,
        EdvHeaderRowComponent
    ],
    providers: [],
})
export class EdvResponsiveTableModule {}